export default function updateCSSVariables(isDarkMode: boolean) {
  const variables = {
    "--background": isDarkMode ? "#08272C" : "#E8E8E8",
    "--footer-text": isDarkMode ? "#EEEEEE" : "#171717",
    "--nav-bg": isDarkMode ? "#DEEDEF" : "#DFE2C6",
    "--nav-text": isDarkMode ? "#171717" : "#171717",
    "--nav-mobile": isDarkMode ? "#16373B" : "#DFE2C6",
    "--primary-text": isDarkMode ? "#EEE" : "#171717",
    "--secondary-text": isDarkMode ? "#EEE" : "#F7F7F7",
  };

  Object.entries(variables).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
}
