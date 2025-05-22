// system.js - 前端互動邏輯
console.log('✅ system.js 已載入');

document.addEventListener('DOMContentLoaded', () => {
  // 元素參考
  const registerForm = document.getElementById('register-form');
  const loginForm = document.getElementById('login-form');
  const registrationSection = document.getElementById('registration');

  if (registerForm) {
    // 1. 註冊互動：隱藏註冊表單，顯示登入表單
    registerForm.addEventListener('submit', e => {
      e.preventDefault();
      const formData = Object.fromEntries(new FormData(registerForm).entries());
      console.log('註冊資料：', formData);
      alert('註冊成功！請進行登入');
      registerForm.reset();
      registerForm.style.display = 'none';
      loginForm.style.display = '';
    });
  }

  if (loginForm) {
    // 2. 登入互動：跳轉到個人主頁（或顯示歡迎訊息）
    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      const formData = Object.fromEntries(new FormData(loginForm).entries());
      console.log('登入資料：', formData);
      alert(`歡迎 ${formData.username}，登入成功！`);
      registrationSection.style.display = 'none';
      // window.location.href = '/profile.html';
    });
  }

  // 3. 卡牌篩選互動（示範）
  const filterBtn = document.getElementById('filter-btn');
  if (filterBtn) {
    filterBtn.addEventListener('click', e => {
      e.preventDefault();
      const attribute = document.querySelector('#filters select[name="attribute"]').value;
      const series = document.querySelector('#filters select[name="series"]').value;
      const rarity = document.querySelector('#filters select[name="rarity"]').value;
      console.log(`篩選：屬性=${attribute}, 系列=${series}, 稀有度=${rarity}`);
      // TODO: 呼叫卡牌 API，並更新 #card-list
    });
  }

  // 4. 我的收藏 & 缺失卡範例
  const importBtn = document.getElementById('import-btn');
  if (importBtn) {
    importBtn.addEventListener('click', () => {
      alert('模擬：已匯入遊戲資料，開始分析持有卡與缺失卡');
      // TODO: 動態填充 #collection-list 和 #missing-list
    });
  }

  // 5. 卡組儲存互動示範
  const saveDeckBtn = document.getElementById('save-deck-btn');
  if (saveDeckBtn) {
    saveDeckBtn.addEventListener('click', () => {
      const deckName = document.getElementById('deck-name').value;
      const deckDesc = document.getElementById('deck-description').value;
      const isPublic = document.getElementById('deck-public').checked;
      console.log('儲存卡組：', { deckName, deckDesc, isPublic });
      alert(`卡組「${deckName}」已儲存${isPublic ? '並公開' : ''}`);
      // TODO: 呼叫後端儲存卡組
    });
  }

  // 6. 好友搜尋示範
  const searchBtn = document.getElementById('search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      const userToSearch = document.getElementById('search-user').value;
      console.log('搜尋好友：', userToSearch);
      alert(`模擬搜尋好友：${userToSearch}`);
      // TODO: 呼叫後端搜尋好友並更新 #friend-list
    });
  }

  // 7. 留言發表示範
  const commentForm = document.getElementById('comment-form');
  if (commentForm) {
    commentForm.addEventListener('submit', e => {
      e.preventDefault();
      const textarea = commentForm.querySelector('textarea');
      const comment = textarea.value;
      console.log('留言內容：', comment);
      const div = document.createElement('div');
      div.textContent = comment;
      document.getElementById('comment-section').append(div);
      commentForm.reset();
    });
  }
});
