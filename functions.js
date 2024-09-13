function managingUser() {
  var theme = "dark";
  let lang = "ru";
  const maxNotifications = 21;

  function updateSettings(newTheme, newLang, newNotifications) {
    if (newTheme) {
      theme = newTheme;
    }

    if (newLang) {
      lang = newLang;
    }

    function displaySettings() {
      console.log(`Theme: ${newTheme}`);
      console.log(`Language: ${newLang}`);
      console.log(
        `Notifications: ${
          newNotifications > maxNotifications
            ? "Notifications exceeds maximum limit! "
            : maxNotifications > newNotifications ? newNotifications : maxNotifications
        }`
      );
    }
    displaySettings();
  }

  updateSettings("light", "en");
}
managingUser();

//  При вызове функции managingUser():
// 1. Создаётся новая область видимости для этой функции.
// 2. Объявляются переменные theme, lang и maxNotifications.
// 3. Вызывается функция updateSettings, которая обновляет значения переменных.
// 4. Затем вызывается функция displaySettings, которая выводит текущие настройки.
