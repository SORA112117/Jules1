import { renderHook, act } from "@testing-library/react"; // Using react as @testing-library/react-hooks is often merged
import { useLocalStorage } from "./useLocalStorage";

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("useLocalStorage Hook", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test("should retrieve the default value if key does not exist", () => {
    const { result } = renderHook(() => useLocalStorage("testKey", "defaultValue"));
    expect(result.current[0]).toBe("defaultValue");
  });

  test("should store and retrieve a new value", () => {
    const { result } = renderHook(() => useLocalStorage("testKey", "defaultValue"));

    act(() => {
      result.current[1]("newValue");
    });

    expect(result.current[0]).toBe("newValue");
    expect(window.localStorage.getItem("testKey")).toBe(JSON.stringify("newValue"));
  });

  test("should retrieve an existing value from localStorage", () => {
    window.localStorage.setItem("testKey", JSON.stringify("existingValue"));
    const { result } = renderHook(() => useLocalStorage("testKey", "defaultValue"));
    expect(result.current[0]).toBe("existingValue");
  });

  test("should update localStorage when value changes", () => {
    const { result } = renderHook(() => useLocalStorage("testKey", "initialValue"));

    act(() => {
      result.current[1]("updatedValue");
    });
    expect(window.localStorage.getItem("testKey")).toBe(JSON.stringify("updatedValue"));
  });

  test("should handle object values", () => {
    const initialObject = { name: "Test", value: 123 };
    const updatedObject = { name: "Test Updated", value: 456 };
    const { result } = renderHook(() => useLocalStorage("objectKey", initialObject));

    expect(result.current[0]).toEqual(initialObject);

    act(() => {
      result.current[1](updatedObject);
    });

    expect(result.current[0]).toEqual(updatedObject);
    expect(JSON.parse(window.localStorage.getItem("objectKey"))).toEqual(updatedObject);
  });
});
