//function for licensing from prompt and add badge, description in the licensing section of the final README.
const generateLicense = license => {
    switch (license) {
      case "MIT":
        return {
          badge: "![MIT](https://img.shields.io/badge/license-MIT-brightgreen)",
          description: "Software is licensed under [MIT license](https://choosealicense.com/licenses/mit/)."
        }
      case "GNU GPLv3":
        return {
          badge: "![GNU GPLv3](https://img.shields.io/badge/license-GNU%20GPLv3-blue)",
          description: "Software is licensed under [GNU GPLv3 license](https://choosealicense.com/licenses/gpl-3.0/)."
        }
      case "Mozilla 2.0":
        return {
          badge: "![Mozilla 2.0](https://img.shields.io/badge/license-Mozilla%202.0-orange)",
          description: "Software is licensed under [Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)."
        }
      case "Apache 2.0":
        return {
          badge: "![Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-yellow)",
          description: "Software is licensed under [Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)."
        }
      default:
        return {
          badge: "![Unlicensed](https://img.shields.io/badge/license-Unlicensed-red)",
          description: "Software is not available under any license and can't be copied, distributed, or modified."
        }
    }
  }