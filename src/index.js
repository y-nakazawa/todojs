import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createInCompleteList(inputText);
};

// 未完了リストから指定のリストを削除
const deleteFromIncompleteList = (target) => {
  // クリックされた削除ボタンのliタグを削除
  document.getElementById("incomplete-list").removeChild(target);
};

const createInCompleteList = (text) => {
  // liタグ作成
  const li = document.createElement("li");
  li.className = "list-row";

  // pタグ作成
  const p = document.createElement("p");
  p.className = "todo";
  p.innerText = text;

  // button（完了）作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // クリックされた削除ボタンのliタグを削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    // liタグの初期化
    addTarget.textContent = null;

    // // pタグ作成
    const p = document.createElement("p");
    p.className = "todo";
    p.innerText = text;

    // button（戻す）作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // クリックされた戻すボタンのliタグを削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = backButton.parentNode.firstElementChild.innerText;

      createInCompleteList(text);
    });

    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button（削除）作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // クリックされた削除ボタンのliタグを削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
