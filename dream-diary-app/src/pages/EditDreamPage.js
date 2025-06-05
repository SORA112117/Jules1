import React from "react";
import { useParams } from "react-router-dom";

function EditDreamPage() {
  const { id } = useParams();
  return (
    <div>
      <h1>夢を編集</h1>
      <p>編集する夢ID: {id}</p>
      {/* Dream form for editing will be here */}
    </div>
  );
}

export default EditDreamPage;
