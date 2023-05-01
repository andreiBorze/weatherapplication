import lightBg from './assets/bg.svg';
import darkBg from './assets/darkBg.svg';

export interface Theme {
  backgroundImage: string;
  backgroundGradient: {
    color1: string;
    color2: string;
  };
  temperatureSwitch: {
    backgroundColor: string;
    sliderColor: string;
    textColor: string;
  };
  searchSuggestion: {
    textColor: string,
    backgroundColor: string;
    hoverBackgroundColor: string;
    seperatorLineColor: string;
  };

  header:{
    backgroundColor: string;
    titleColor: string;
    iconColor: string;
  };
  search: {
    backgroundColor: string;
    iconColor: string,
    searchInput: {
      color: string;
      placeholderColor: string;
    },
    button:  {
      color: string;
      placeholderColor: string;
      hoverColor: string;
    }
  };
  CurrentWeather: {
    containerBgColor: string;
    textColor: string;

    cityNameContainer:{
      containerBgColor: string;
      textColor: string;
    },
    temperatureContainer: {
      containerBgColor: string;
      textColor:  string;
    }
  }
  Forecast: {
    containerBgColor: string;
    textColor: string;
  },
  CurrentNewsContainer: {
    containerBgColor: string;
    textColor: string;
  };

  ArticleNewContainer: {
    containerBgColor: string;
    textColor: string;
  };
  SwitchPagesGrid: {
    containerBgColor: string;
    textColor: string;
  };
}

export const lightTheme: Theme = {
  backgroundImage: lightBg,
  backgroundGradient: {
    color1: '#d0d3d9',
    color2: '#dfe7f5',
  },
  temperatureSwitch: {
    backgroundColor: '#77b1c7',
    sliderColor: '#fff',
    textColor: '#fff',
  },
  searchSuggestion: {
    textColor: 'rgb(0, 0, 0)',
    backgroundColor: '#fff',
    hoverBackgroundColor: '#f9f9f9',
    seperatorLineColor: '#ccc',
  },
  header: {
    backgroundColor: 'none',
    titleColor: '#17181a',
    iconColor: '#17181a'
  },
  search: {
    backgroundColor: '#f2f3f5',
    iconColor: '#17181a',
    searchInput: {
      color: '#17181a',
      placeholderColor: '#17181a'
    },
    button:  {
      color: '#ffffff',
      placeholderColor: '#17181a',
      hoverColor: '#274c96',
    }
  },
  CurrentWeather: {
    containerBgColor: 'white',
    textColor: '#17181a',
    cityNameContainer: {
      containerBgColor: 'rgba(128, 128, 128, 0.2)',
      textColor: '#17181a',
    },
    temperatureContainer: {
      containerBgColor: 'rgba(149, 149, 149, 0.2)',
      textColor: '#17181a',
    },
  },
  Forecast: {
    containerBgColor: 'white',
    textColor: '#17181a'
  },
  CurrentNewsContainer: {
    containerBgColor: '#f2f2f2',
    textColor: ''
  },
  ArticleNewContainer: {
    containerBgColor: '#f2f2f2',
    textColor: ''
  },
  SwitchPagesGrid: {
    containerBgColor: '#f2f2f2',
    textColor: '#17181a'
  }
};

export const darkTheme: Theme = {
  backgroundImage: darkBg,
  backgroundGradient: {
    color1: '#031027',
    color2: '#02101D',
  },
  temperatureSwitch: {
    backgroundColor: '#1b3657',
    sliderColor: '#437abd',
    textColor: '#718cac',
  },
  searchSuggestion: {
    textColor: 'rgb(206, 206, 206)',
    backgroundColor: '#0f2744',
    hoverBackgroundColor: '#183553',
    seperatorLineColor: '#356097',
  },

  header: {
    backgroundColor: 'none',
    titleColor: '#f2f3f5',
    iconColor: '#f2f3f5'
  },
  search: {
    backgroundColor: '#f2f3f5',
    iconColor: '#17181a',
    searchInput: {
      color: '#17181a',
      placeholderColor: '#17181a'
    },
    button:  {
      color: '#ffffff',
      placeholderColor: '#17181a',
      hoverColor: '#274c96',
    }
  },
  CurrentWeather: {
    containerBgColor: 'rgba(128, 128, 128, 0.2)',
    textColor: 'rgb(206, 206, 206)',
    cityNameContainer: {
      containerBgColor: 'rgba(128, 128, 128, 0.2)',
      textColor: 'rgb(206, 206, 206)'
    },
    temperatureContainer: {
      containerBgColor: 'rgb(206, 206, 206, 0.2)',
      textColor: 'rgb(206, 206, 206, 0.2)',
    }
  },
  Forecast: {
    containerBgColor: 'rgba(128, 128, 128, 0.2)',
    textColor: '#f2f3f5'
  },
  CurrentNewsContainer: {
    containerBgColor: '#ffffff',
    textColor: ''
  },
  ArticleNewContainer: {
    containerBgColor: '#ffffff',
    textColor: ''
  }, 
  SwitchPagesGrid: {
    containerBgColor: '#ffffff',
    textColor: '#17181a'
  }
};
