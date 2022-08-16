import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  Pressable,
  ImageBackground,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const url = "https://tag-along-backend-pg9zg.ondigitalocean.app/api";

export default function EditProfileScreen({route}) {
  const [ambitiousTimesPressed, setambitiousTimesPressed] = useState(0);
  const [marvelFanValue, setmarvelFanValue] = useState(0);
  const [DCValue, setDCValue] = useState(0);
  const [GamerValue, setGamerValue] = useState(0);
  const [FoodieValue, setFoodieValue] = useState(0);
  const [GymRatValue, setGymRatValue] = useState(0);
  const [AnimeFanValue, setAnimeFanValue] = useState(0);
  const [ArtLoverValue, setArtLoverValue] = useState(0);
  const [FilmBuffValue, setFilmBuffValue] = useState(0);
  const [HomebodyValue, setHomebodyValue] = useState(0);
  const [NightOwlValue, setNightOwlValue] = useState(0);
  const [CatPersonValue, setCatPersonValue] = useState(0);
  const [DogPersonValue, setDogPersonValue] = useState(0);
  const [EasyGoingValue, setEasyGoingValue] = useState(0);
  const [BeatlesFanValue, setBeatlesFanValue] = useState(0);
  const [ExtrovertedValue, setExtrovertedValue] = useState(0);
  const [IntrovertedValue, setIntrovertedValue] = useState(0);
  const [NatureLoverValue, setNatureLoverValue] = useState(0);
  const [StarWarsFanValue, setStarWarsFanValue] = useState(0);
  const [ThrillSeekerValue, setThrillSeekerValue] = useState(0);
  const [BasketballFanValue, setBasketballFanValue] = useState(0);
  const [MorningPersonValue, setMorningPersonValue] = useState(0);
  const [CoffeeEnthusiastValue, setCoffeeEnthusiastValue] = useState(0);
  const [ClassicalMusicFanValue, setClassicalMusicFanValue] = useState(0);
  const [StrangerThingsFanValue, setStrangerThingsFanValue] = useState(0);
  const [username, setUsername] = useState(route.params.username);
  const [userData, setUserData] = useState({});


  useEffect(() => {
    console.log("Username: ",username);
    fetch(`${url}/${username}`, {
      method: 'GET',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
  
      .then((response) => response.json())
      .then(data => {
        setUserData(data);
        setambitiousTimesPressed(data['Tags']['Ambitious']);
        setmarvelFanValue(data['Tags']['MarvelFan']);
        setDCValue(data['Tags']['DCFan']);
        setGamerValue(data['Tags']['Gamer']);
        setFoodieValue(data['Tags']['Foodie']);
        setGymRatValue(data['Tags']['GymRat']);
        setAnimeFanValue(data['Tags']['AnimeFan']);
        setArtLoverValue(data['Tags']['ArtLover']);
        setFilmBuffValue(data['Tags']['FilmBuff']);
        setHomebodyValue(data['Tags']['Homebody']);
        setNightOwlValue(data['Tags']['NightOwl']);
        setCatPersonValue(data['Tags']['CatPerson']);
        setDogPersonValue(data['Tags']['DogPerson']);
        setEasyGoingValue(data['Tags']['EasyGoing']);
        setBeatlesFanValue(data['Tags']['BeatlesFan']);
        setExtrovertedValue(data['Tags']['Extroverted']);
        setIntrovertedValue(data['Tags']['Introverted']);
        setNatureLoverValue(data['Tags']['NatureLover']);
        setStarWarsFanValue(data['Tags']['StarWarsFan']);
        setThrillSeekerValue(data['Tags']['ThrillSeeker']);
        setBasketballFanValue(data['Tags']['BasketballFan']);
        setMorningPersonValue(data['Tags']['MorningPerson']);
        setCoffeeEnthusiastValue(data['Tags']['CoffeeEnthusiast']);
        setClassicalMusicFanValue(data['Tags']['ClassicalMusicFan']);
        setStrangerThingsFanValue(data['Tags']['StrangerThingsFan']);
      })
      .catch((error) => {
          console.error(error);
      });
  },[])
  
  //Here, the amount of times the interest button is pressed, is tracked
  let textLog = '';

  if (ambitiousTimesPressed < 4) {
    textLog = 'not interested';
  }
  if (ambitiousTimesPressed == 1) {
    textLog = 'Somewhat Interested';
    console.log('ambitiousTimesPressed: ', textLog);
  }
  if (ambitiousTimesPressed == 2) {
    textLog = ' Interested';
    console.log('ambitiousTimesPressed: ', textLog);
  }
  if (ambitiousTimesPressed == 3) {
    textLog = 'Very Interested';
    console.log('ambitiousTimesPressed: ', textLog);
  } else if (ambitiousTimesPressed >= 4) {
    if (ambitiousTimesPressed % 4 == 0) {
      textLog = 'not interested';
      console.log('ambitiousTimesPressed: ', textLog);
    }
    if (ambitiousTimesPressed % 4 == 1) {
      textLog = 'Somewhat Interested';
      console.log('ambitiousTimesPressed: ', textLog);
    }
    if (ambitiousTimesPressed % 4 == 2) {
      textLog = 'Interested';
      console.log('ambitiousTimesPressed: ', textLog);
    }
    if (ambitiousTimesPressed % 4 == 3) {
      textLog = 'Very Interested';
      console.log('ambitiousTimesPressed: ', textLog);
    }
  }

  let marvelLog = '';

  if (marvelFanValue == 0) {
    marvelLog =  ' not interested';
    console.log('marvelFanValue: ', marvelLog);
  }
  if (marvelFanValue == 1) {
    marvelLog = 'Somewhat Interested';
    console.log('marvelFanValue: ', marvelLog);
  }
  if (marvelFanValue == 2) {
    marvelLog = ' Interested';
    console.log('marvelFanValue: ', marvelLog);
  }
  if (marvelFanValue == 3) {
    marvelLog = 'Very Interested';
  } else if (marvelFanValue >= 4) {
    if (marvelFanValue % 4 == 0) {
      marvelLog = 'not interested';
      console.log('marvelFanValue: ', marvelLog);
    }
    if (marvelFanValue % 4 == 1) {
      marvelLog = 'Somewhat Interested';
      console.log('marvelFanValue: ', marvelLog);
    }
    if (marvelFanValue % 4 == 2) {
      marvelLog = 'Interested';
      console.log('marvelFanValue: ', marvelLog);
    }
    if (marvelFanValue % 4 == 3) {
      marvelLog = 'Very Interested';
      console.log('marvelFanValue: ', marvelLog);
    }
  }

  let DClog = '';

  if (DCValue == 0) {
    DClog = ' not interested';
    console.log('DCValue: ', DClog);
  }
  if (DCValue == 1) {
    DClog = 'Somewhat Interested';
    console.log('DCValue: ', DClog);
  }
  if (DCValue == 2) {
    DClog = ' Interested';
    console.log('DCValue: ', DClog);
  }
  if (DCValue == 3) {
    DClog = 'Very Interested';
    console.log('DCValue: ', DClog);
  } else if (DCValue >= 4) {
    if (DCValue % 4 == 0) {
      DClog = 'not interested';
      console.log('DCValue: ', DClog);
    }
    if (DCValue % 4 == 1) {
      DClog = 'Somewhat Interested';
      console.log('DCValue: ', DClog);
    }
    if (DCValue % 4 == 2) {
      DClog = 'Interested';
      console.log('DCValue: ', DClog);
    }
    if (DCValue % 4 == 3) {
      DClog = 'Very Interested';
      console.log('DCValue: ', DClog);
    }
  }

  let Gamerlog = '';

  if (GamerValue == 0) {
    Gamerlog =  ' not interested';
    console.log('GamerValue: ', Gamerlog);
  }
  if (GamerValue == 1) {
    Gamerlog = 'Somewhat Interested';
    console.log('GamerValue: ', Gamerlog);
  }
  if (GamerValue == 2) {
    Gamerlog = ' Interested';
    console.log('GamerValue: ', Gamerlog);
  }
  if (GamerValue == 3) {
    Gamerlog = 'Very Interested';
    console.log('GamerValue: ', Gamerlog);
  } else if (GamerValue >= 4) {
    if (GamerValue % 4 == 0) {
      Gamerlog = 'not interested';
      console.log('GamerValue: ', Gamerlog);
    }
    if (GamerValue % 4 == 1) {
      Gamerlog = 'Somewhat Interested';
      console.log('GamerValue: ', Gamerlog);
    }
    if (GamerValue % 4 == 2) {
      Gamerlog = 'Interested';
      console.log('GamerValue: ', Gamerlog);
    }
    if (GamerValue % 4 == 3) {
      Gamerlog = 'Very Interested';
      console.log('GamerValue: ', Gamerlog);
    }
  }

  let Foodielog = '';

  if (FoodieValue == 0) {
    Foodielog = ' not interested';
    console.log('FoodieValue: ', Foodielog);
  }
  if (FoodieValue == 1) {
    Foodielog = 'Somewhat Interested';
    console.log('FoodieValue: ', Foodielog);
  }
  if (FoodieValue == 2) {
    Foodielog = ' Interested';
    console.log('FoodieValue: ', Foodielog);
  }
  if (FoodieValue == 3) {
    Foodielog = 'Very Interested';
    console.log('FoodieValue: ', Foodielog);
  } else if (FoodieValue >= 4) {
    if (FoodieValue % 4 == 0) {
      Foodielog = 'not interested';
      console.log('FoodieValue: ', Foodielog);
    }
    if (FoodieValue % 4 == 1) {
      Foodielog = 'Somewhat Interested';
      console.log('FoodieValue: ', Foodielog);
    }
    if (FoodieValue % 4 == 2) {
      Foodielog = 'Interested';
      console.log('FoodieValue: ', Foodielog);
    }
    if (FoodieValue % 4 == 3) {
      Foodielog = 'Very Interested';
      console.log('FoodieValue: ', Foodielog);
    }
  }

  let GymRatlog = '';

  if (GymRatValue == 0) {
    GymRatlog = ' not interested';
    console.log('GymRatValue: ', GymRatlog);
  }
  if (GymRatValue == 1) {
    GymRatlog = 'Somewhat Interested';
    console.log('GymRatValue: ', GymRatlog);
  }
  if (GymRatValue == 2) {
    GymRatlog = ' Interested';
    console.log('GymRatValue: ', GymRatlog);
  }
  if (GymRatValue == 3) {
    GymRatlog = 'Very Interested';
    console.log('GymRatValue: ', GymRatlog);
  } else if (GymRatValue >= 4) {
    if (GymRatValue % 4 == 0) {
      GymRatlog = 'not interested';
      console.log('GymRatValue: ', GymRatlog);
    }
    if (GymRatValue % 4 == 1) {
      GymRatlog = 'Somewhat Interested';
      console.log('GymRatValue: ', GymRatlog);
    }
    if (GymRatValue % 4 == 2) {
      GymRatlog = 'Interested';
      console.log('GymRatValue: ', GymRatlog);
    }
    if (GymRatValue % 4 == 3) {
      GymRatlog = 'Very Interested';
      console.log('GymRatValue: ', GymRatlog);
    }
  }

  let AnimeFanlog = '';

  if (AnimeFanValue == 0) {
    AnimeFanlog = ' not interested';
    console.log('AnimeFanValue: ', AnimeFanlog);
  }
  if (AnimeFanValue == 1) {
    AnimeFanlog = 'Somewhat Interested';
    console.log('AnimeFanValue: ', AnimeFanlog);
  }
  if (AnimeFanValue == 2) {
    AnimeFanlog = ' Interested';
    console.log('AnimeFanValue: ', AnimeFanlog);
  }
  if (AnimeFanValue == 3) {
    AnimeFanlog = 'Very Interested';
    console.log('AnimeFanValue: ', AnimeFanlog);
  } else if (AnimeFanValue >= 4) {
    if (AnimeFanValue % 4 == 0) {
      AnimeFanlog = 'not interested';
      console.log('AnimeFanValue: ', AnimeFanlog);
    }
    if (AnimeFanValue % 4 == 1) {
      AnimeFanlog = 'Somewhat Interested';
      console.log('AnimeFanValue: ', AnimeFanlog);
    }
    if (AnimeFanValue % 4 == 2) {
      AnimeFanlog = 'Interested';
      console.log('AnimeFanValue: ', AnimeFanlog);
    }
    if (AnimeFanValue % 4 == 3) {
      AnimeFanlog = 'Very Interested';
      console.log('AnimeFanValue: ', AnimeFanlog);
    }
  }

  let ArtLoverlog = '';

  if (ArtLoverValue == 0) {
    ArtLoverlog =' not interested';
    console.log('ArtLoverValue: ', ArtLoverlog);
  }
  if (ArtLoverValue == 1) {
    ArtLoverlog = 'Somewhat Interested';
    console.log('ArtLoverValue: ', ArtLoverlog);
  }
  if (ArtLoverValue == 2) {
    ArtLoverlog = ' Interested';
    console.log('ArtLoverValue: ', ArtLoverlog);
  }
  if (ArtLoverValue == 3) {
    ArtLoverlog = 'Very Interested';
    console.log('ArtLoverValue: ', ArtLoverlog);
  } else if (ArtLoverValue >= 4) {
    if (ArtLoverValue % 4 == 0) {
      ArtLoverlog = 'not interested';
      console.log('ArtLoverValue: ', ArtLoverlog);
    }
    if (ArtLoverValue % 4 == 1) {
      ArtLoverlog = 'Somewhat Interested';
      console.log('ArtLoverValue: ', ArtLoverlog);
    }
    if (ArtLoverValue % 4 == 2) {
      ArtLoverlog = 'Interested';
      console.log('ArtLoverValue: ', ArtLoverlog);
    }
    if (ArtLoverValue % 4 == 3) {
      ArtLoverlog = 'Very Interested';
      console.log('ArtLoverValue: ', ArtLoverlog);
    }
  }

  let FilmBufflog = '';

  if (FilmBuffValue == 0) {
    FilmBufflog = ' not interested';
    console.log('FilmBuffValue: ', FilmBufflog);
  }
  if (FilmBuffValue == 1) {
    FilmBufflog = 'Somewhat Interested';
    console.log('FilmBuffValue: ', FilmBufflog);
  }
  if (FilmBuffValue == 2) {
    FilmBufflog = ' Interested';
    console.log('FilmBuffValue: ', FilmBufflog);
  }
  if (FilmBuffValue == 3) {
    FilmBufflog = 'Very Interested';
    console.log('FilmBuffValue: ', FilmBufflog);
  } else if (FilmBuffValue >= 4) {
    if (FilmBuffValue % 4 == 0) {
      FilmBufflog = 'not interested';
      console.log('FilmBuffValue: ', FilmBufflog);
    }
    if (FilmBuffValue % 4 == 1) {
      FilmBufflog = 'Somewhat Interested';
      console.log('FilmBuffValue: ', FilmBufflog);
    }
    if (FilmBuffValue % 4 == 2) {
      FilmBufflog = 'Interested';
      console.log('FilmBuffValue: ', FilmBufflog);
    }
    if (FilmBuffValue % 4 == 3) {
      FilmBufflog = 'Very Interested';
      console.log('FilmBuffValue: ', FilmBufflog);
    }
  }

  let Homebodylog = '';

  if (HomebodyValue == 0) {
    Homebodylog =  ' not interested';
    console.log('HomebodyValue: ', Homebodylog);
  }
  if (HomebodyValue == 1) {
    Homebodylog = 'Somewhat Interested';
    console.log('HomebodyValue: ', Homebodylog);
  }
  if (HomebodyValue == 2) {
    Homebodylog = ' Interested';
    console.log('HomebodyValue: ', Homebodylog);
  }
  if (HomebodyValue == 3) {
    Homebodylog = 'Very Interested';
    console.log('HomebodyValue: ', Homebodylog);
  } else if (HomebodyValue >= 4) {
    if (HomebodyValue % 4 == 0) {
      Homebodylog = 'not interested';
      console.log('HomebodyValue: ', Homebodylog);
    }
    if (HomebodyValue % 4 == 1) {
      Homebodylog = 'Somewhat Interested';
      console.log('HomebodyValue: ', Homebodylog);
    }
    if (HomebodyValue % 4 == 2) {
      Homebodylog = 'Interested';
      console.log('HomebodyValue: ', Homebodylog);
    }
    if (HomebodyValue % 4 == 3) {
      Homebodylog = 'Very Interested';
      console.log('HomebodyValue: ', Homebodylog);
    }
  }

  let NightOwllog = '';

  if (NightOwlValue == 0) {
    NightOwllog = ' not interested';
    console.log('NightOwlValue: ', NightOwllog);
  }
  if (NightOwlValue == 1) {
    NightOwllog = 'Somewhat Interested';
    console.log('NightOwlValue: ', NightOwllog);
  }
  if (NightOwlValue == 2) {
    NightOwllog = ' Interested';
    console.log('NightOwlValue: ', NightOwllog);
  }
  if (NightOwlValue == 3) {
    NightOwllog = 'Very Interested';
    console.log('NightOwlValue: ', NightOwllog);
  } else if (NightOwlValue >= 4) {
    if (NightOwlValue % 4 == 0) {
      NightOwllog = 'not interested';
      console.log('NightOwlValue: ', NightOwllog);
    }
    if (NightOwlValue % 4 == 1) {
      NightOwllog = 'Somewhat Interested';
      console.log('NightOwlValue: ', NightOwllog);
    }
    if (NightOwlValue % 4 == 2) {
      NightOwllog = 'Interested';
      console.log('NightOwlValue: ', NightOwllog);
    }
    if (NightOwlValue % 4 == 3) {
      NightOwllog = 'Very Interested';
      console.log('NightOwlValue: ', NightOwllog);
    }
  }

  let CatPersonlog = '';

  if (CatPersonValue == 0) {
    CatPersonlog = ' not interested';
    console.log('CatPersonValue: ', CatPersonlog);
  }
  if (CatPersonValue == 1) {
    CatPersonlog = 'Somewhat Interested';
    console.log('CatPersonValue: ', CatPersonlog);
  }
  if (CatPersonValue == 2) {
    CatPersonlog = ' Interested';
    console.log('CatPersonValue: ', CatPersonlog);
  }
  if (CatPersonValue == 3) {
    CatPersonlog = 'Very Interested';
    console.log('CatPersonValue: ', CatPersonlog);
  } else if (CatPersonValue >= 4) {
    if (CatPersonValue % 4 == 0) {
      CatPersonlog = 'not interested';
      console.log('CatPersonValue: ', CatPersonlog);
    }
    if (CatPersonValue % 4 == 1) {
      CatPersonlog = 'Somewhat Interested';
      console.log('CatPersonValue: ', CatPersonlog);
    }
    if (CatPersonValue % 4 == 2) {
      CatPersonlog = 'Interested';
      console.log('CatPersonValue: ', CatPersonlog);
    }
    if (CatPersonValue % 4 == 3) {
      CatPersonlog = 'Very Interested';
      console.log('CatPersonValue: ', CatPersonlog);
    }
  }

  let DogPersonlog = '';

  if (DogPersonValue == 0) {
    DogPersonlog = ' not interested';
    console.log('DogPersonValue: ', DogPersonlog);
  }
  if (DogPersonValue == 1) {
    DogPersonlog = 'Somewhat Interested';
    console.log('DogPersonValue: ', DogPersonlog);
  }
  if (DogPersonValue == 2) {
    DogPersonlog = ' Interested';
    console.log('DogPersonValue: ', DogPersonlog);
  }
  if (DogPersonValue == 3) {
    DogPersonlog = 'Very Interested';
    console.log('DogPersonValue: ', DogPersonlog);
  } else if (DogPersonValue >= 4) {
    if (DogPersonValue % 4 == 0) {
      DogPersonlog = 'not interested';
      console.log('DogPersonValue: ', DogPersonlog);
    }
    if (DogPersonValue % 4 == 1) {
      DogPersonlog = 'Somewhat Interested';
      console.log('DogPersonValue: ', DogPersonlog);
    }
    if (DogPersonValue % 4 == 2) {
      DogPersonlog = 'Interested';
      console.log('DogPersonValue: ', DogPersonlog);
    }
    if (DogPersonValue % 4 == 3) {
      DogPersonlog = 'Very Interested';
      console.log('DogPersonValue: ', DogPersonlog);
    }
  }

  let EasyGoinglog = '';

  if (EasyGoingValue == 0) {
    EasyGoinglog =' not interested';
    console.log('EasyGoingValue: ', EasyGoinglog);
  }
  if (EasyGoingValue == 1) {
    EasyGoinglog = 'Somewhat Interested';
    console.log('EasyGoingValue: ', EasyGoinglog);
  }
  if (EasyGoingValue == 2) {
    EasyGoinglog = ' Interested';
    console.log('EasyGoingValue: ', EasyGoinglog);
  }
  if (EasyGoingValue == 3) {
    EasyGoinglog = 'Very Interested';
    console.log('EasyGoingValue: ', EasyGoinglog);
  } else if (EasyGoingValue >= 4) {
    if (EasyGoingValue % 4 == 0) {
      EasyGoinglog = 'not interested';
      console.log('EasyGoingValue: ', EasyGoinglog);
    }
    if (EasyGoingValue % 4 == 1) {
      EasyGoinglog = 'Somewhat Interested';
      console.log('EasyGoingValue: ', EasyGoinglog);
    }
    if (EasyGoingValue % 4 == 2) {
      EasyGoinglog = 'Interested';
      console.log('EasyGoingValue: ', EasyGoinglog);
    }
    if (EasyGoingValue % 4 == 3) {
      EasyGoinglog = 'Very Interested';
      console.log('EasyGoingValue: ', EasyGoinglog);
    }
  }

  let BeatlesFanlog = '';

  if (BeatlesFanValue == 0) {
    BeatlesFanlog = ' not interested';
    console.log('BeatlesFanValue: ', BeatlesFanlog);
  }
  if (BeatlesFanValue == 1) {
    BeatlesFanlog = 'Somewhat Interested';
    console.log('BeatlesFanValue: ', BeatlesFanlog);
  }
  if (BeatlesFanValue == 2) {
    BeatlesFanlog = ' Interested';
    console.log('BeatlesFanValue: ', BeatlesFanlog);
  }
  if (BeatlesFanValue == 3) {
    BeatlesFanlog = 'Very Interested';
    console.log('BeatlesFanValue: ', BeatlesFanlog);
  } else if (BeatlesFanValue >= 4) {
    if (BeatlesFanValue % 4 == 0) {
      BeatlesFanlog = 'not interested';
      console.log('BeatlesFanValue: ', BeatlesFanlog);
    }
    if (BeatlesFanValue % 4 == 1) {
      BeatlesFanlog = 'Somewhat Interested';
      console.log('BeatlesFanValue: ', BeatlesFanlog);
    }
    if (BeatlesFanValue % 4 == 2) {
      BeatlesFanlog = 'Interested';
      console.log('BeatlesFanValue: ', BeatlesFanlog);
    }
    if (BeatlesFanValue % 4 == 3) {
      BeatlesFanlog = 'Very Interested';
      console.log('BeatlesFanValue: ', BeatlesFanlog);
    }
  }

  let Extrovertedlog = '';

  if (ExtrovertedValue == 0) {
    Extrovertedlog = ' not interested';
    console.log('ExtrovertedValue: ', Extrovertedlog);
  }
  if (ExtrovertedValue == 1) {
    Extrovertedlog = 'Somewhat Interested';
    console.log('ExtrovertedValue: ', Extrovertedlog);
  }
  if (ExtrovertedValue == 2) {
    Extrovertedlog = ' Interested';
    console.log('ExtrovertedValue: ', Extrovertedlog);
  }
  if (ExtrovertedValue == 3) {
    Extrovertedlog = 'Very Interested';
    console.log('ExtrovertedValue: ', Extrovertedlog);
  } else if (ExtrovertedValue >= 4) {
    if (ExtrovertedValue % 4 == 0) {
      Extrovertedlog = 'not interested';
      console.log('ExtrovertedValue: ', Extrovertedlog);
    }
    if (ExtrovertedValue % 4 == 1) {
      Extrovertedlog = 'Somewhat Interested';
      console.log('ExtrovertedValue: ', Extrovertedlog);
    }
    if (ExtrovertedValue % 4 == 2) {
      Extrovertedlog = 'Interested';
      console.log('ExtrovertedValue: ', Extrovertedlog);
    }
    if (ExtrovertedValue % 4 == 3) {
      Extrovertedlog = 'Very Interested';
      console.log('ExtrovertedValue: ', Extrovertedlog);
    }
  }

  let Introvertedlog = '';

  if (IntrovertedValue == 0) {
    Introvertedlog =  ' not interested';
    console.log('IntrovertedValue: ', Introvertedlog);
  }
  if (IntrovertedValue == 1) {
    Introvertedlog = 'Somewhat Interested';
    console.log('IntrovertedValue: ', Introvertedlog);
  }
  if (IntrovertedValue == 2) {
    Introvertedlog = ' Interested';
    console.log('IntrovertedValue: ', Introvertedlog);
  }
  if (IntrovertedValue == 3) {
    Introvertedlog = 'Very Interested';
    console.log('IntrovertedValue: ', Introvertedlog);
  } else if (IntrovertedValue >= 4) {
    if (IntrovertedValue % 4 == 0) {
      Introvertedlog = 'not interested';
      console.log('IntrovertedValue: ', Introvertedlog);
    }
    if (IntrovertedValue % 4 == 1) {
      Introvertedlog = 'Somewhat Interested';
      console.log('IntrovertedValue: ', Introvertedlog);
    }
    if (IntrovertedValue % 4 == 2) {
      Introvertedlog = 'Interested';
      console.log('IntrovertedValue: ', Introvertedlog);
    }
    if (IntrovertedValue % 4 == 3) {
      Introvertedlog = 'Very Interested';
      console.log('IntrovertedValue: ', Introvertedlog);
    }
  }

  let NatureLoverlog = '';

  if (NatureLoverValue == 0) {
    NatureLoverlog = ' not interested';
    console.log('NatureLoverValue: ', NatureLoverlog);
  }
  if (NatureLoverValue == 1) {
    NatureLoverlog = 'Somewhat Interested';
    console.log('NatureLoverValue: ', NatureLoverlog);
  }
  if (NatureLoverValue == 2) {
    NatureLoverlog = ' Interested';
    console.log('NatureLoverValue: ', NatureLoverlog);
  }
  if (NatureLoverValue == 3) {
    NatureLoverlog = 'Very Interested';
    console.log('NatureLoverValue: ', NatureLoverlog);
  } else if (NatureLoverValue >= 4) {
    if (NatureLoverValue % 4 == 0) {
      NatureLoverlog = 'not interested';
      console.log('NatureLoverValue: ', NatureLoverlog);
    }
    if (NatureLoverValue % 4 == 1) {
      NatureLoverlog = 'Somewhat Interested';
      console.log('NatureLoverValue: ', NatureLoverlog);
    }
    if (NatureLoverValue % 4 == 2) {
      NatureLoverlog = 'Interested';
      console.log('NatureLoverValue: ', NatureLoverlog);
    }
    if (NatureLoverValue % 4 == 3) {
      NatureLoverlog = 'Very Interested';
      console.log('NatureLoverValue: ', NatureLoverlog);
    }
  }

  let StarWarsFanlog = '';

  if (StarWarsFanValue == 0) {
    StarWarsFanlog =  ' not interested';
    console.log('StarWarsFanValue: ', StarWarsFanlog);
  }
  if (StarWarsFanValue == 1) {
    StarWarsFanlog = 'Somewhat Interested';
    console.log('StarWarsFanValue: ', StarWarsFanlog);
  }
  if (StarWarsFanValue == 2) {
    StarWarsFanlog = ' Interested';
    console.log('StarWarsFanValue: ', StarWarsFanlog);
  }
  if (StarWarsFanValue == 3) {
    StarWarsFanlog = 'Very Interested';
    console.log('StarWarsFanValue: ', StarWarsFanlog);
  } else if (StarWarsFanValue >= 4) {
    if (StarWarsFanValue % 4 == 0) {
      StarWarsFanlog = 'not interested';
      console.log('StarWarsFanValue: ', StarWarsFanlog);
    }
    if (StarWarsFanValue % 4 == 1) {
      StarWarsFanlog = 'Somewhat Interested';
      console.log('StarWarsFanValue: ', StarWarsFanlog);
    }
    if (StarWarsFanValue % 4 == 2) {
      StarWarsFanlog = 'Interested';
      console.log('StarWarsFanValue: ', StarWarsFanlog);
    }
    if (StarWarsFanValue % 4 == 3) {
      StarWarsFanlog = 'Very Interested';
      console.log('StarWarsFanValue: ', StarWarsFanlog);
    }
  }

  let ThrillSeekerlog = '';

  if (ThrillSeekerValue == 0) {
    ThrillSeekerlog =  ' not interested';
    console.log('ThrillSeekerValue: ', ThrillSeekerlog);
  }
  if (ThrillSeekerValue == 1) {
    ThrillSeekerlog = 'Somewhat Interested';
    console.log('ThrillSeekerValue: ', ThrillSeekerlog);
  }
  if (ThrillSeekerValue == 2) {
    ThrillSeekerlog = ' Interested';
    console.log('ThrillSeekerValue: ', ThrillSeekerlog);
  }
  if (ThrillSeekerValue == 3) {
    ThrillSeekerlog = 'Very Interested';
    console.log('ThrillSeekerValue: ', ThrillSeekerlog);
  } else if (ThrillSeekerValue >= 4) {
    if (ThrillSeekerValue % 4 == 0) {
      ThrillSeekerlog = 'not interested';
      console.log('ThrillSeekerValue: ', ThrillSeekerlog);
    }
    if (ThrillSeekerValue % 4 == 1) {
      ThrillSeekerlog = 'Somewhat Interested';
      console.log('ThrillSeekerValue: ', ThrillSeekerlog);
    }
    if (ThrillSeekerValue % 4 == 2) {
      ThrillSeekerlog = 'Interested';
      console.log('ThrillSeekerValue: ', ThrillSeekerlog);
    }
    if (ThrillSeekerValue % 4 == 3) {
      ThrillSeekerlog = 'Very Interested';
      console.log('ThrillSeekerValue: ', ThrillSeekerlog);
    }
  }

  let BasketballFanlog = '';

  if (BasketballFanValue == 0) {
    BasketballFanlog = ' not interested';
    console.log('BasketballFanValue: ', BasketballFanlog);
  }
  if (BasketballFanValue == 1) {
    BasketballFanlog = 'Somewhat Interested';
    console.log('BasketballFanValue: ', BasketballFanlog);
  }
  if (BasketballFanValue == 2) {
    BasketballFanlog = ' Interested';
    console.log('BasketballFanValue: ', BasketballFanlog);
  }
  if (BasketballFanValue == 3) {
    BasketballFanlog = 'Very Interested';
    console.log('BasketballFanValue: ', BasketballFanlog);
  } else if (BasketballFanValue >= 4) {
    if (BasketballFanValue % 4 == 0) {
      BasketballFanlog = 'not interested';
      console.log('BasketballFanValue: ', BasketballFanlog);
    }
    if (BasketballFanValue % 4 == 1) {
      BasketballFanlog = 'Somewhat Interested';
      console.log('BasketballFanValue: ', BasketballFanlog);
    }
    if (BasketballFanValue % 4 == 2) {
      BasketballFanlog = 'Interested';
      console.log('BasketballFanValue: ', BasketballFanlog);
    }
    if (BasketballFanValue % 4 == 3) {
      BasketballFanlog = 'Very Interested';
      console.log('BasketballFanValue: ', BasketballFanlog);
    }
  }

  let MorningPersonlog = '';

  if (MorningPersonValue == 0) {
    MorningPersonlog =' not interested';
    console.log('MorningPersonValue: ', MorningPersonlog);
  }
  if (MorningPersonValue == 1) {
    MorningPersonlog = 'Somewhat Interested';
    console.log('MorningPersonValue: ', MorningPersonlog);
  }
  if (MorningPersonValue == 2) {
    MorningPersonlog = ' Interested';
    console.log('MorningPersonValue: ', MorningPersonlog);
  }
  if (MorningPersonValue == 3) {
    MorningPersonlog = 'Very Interested';
    console.log('MorningPersonValue: ', MorningPersonlog);
  } else if (MorningPersonValue >= 4) {
    if (MorningPersonValue % 4 == 0) {
      MorningPersonlog = 'not interested';
      console.log('MorningPersonValue: ', MorningPersonlog);
    }
    if (MorningPersonValue % 4 == 1) {
      MorningPersonlog = 'Somewhat Interested';
      console.log('MorningPersonValue: ', MorningPersonlog);
    }
    if (MorningPersonValue % 4 == 2) {
      MorningPersonlog = 'Interested';
      console.log('MorningPersonValue: ', MorningPersonlog);
    }
    if (MorningPersonValue % 4 == 3) {
      MorningPersonlog = 'Very Interested';
      console.log('MorningPersonValue: ', MorningPersonlog);
    }
  }

  let CoffeeEnthusiastlog = '';

  if (CoffeeEnthusiastValue == 0) {
    CoffeeEnthusiastlog =  ' not interested';
    console.log('CoffeeEnthusiastValue: ', CoffeeEnthusiastlog);
  }
  if (CoffeeEnthusiastValue == 1) {
    CoffeeEnthusiastlog = 'Somewhat Interested';
    console.log('CoffeeEnthusiastValue: ', CoffeeEnthusiastlog);
  }
  if (CoffeeEnthusiastValue == 2) {
    CoffeeEnthusiastlog = ' Interested';
    console.log('CoffeeEnthusiastValue: ', CoffeeEnthusiastlog);
  }
  if (CoffeeEnthusiastValue == 3) {
    CoffeeEnthusiastlog = 'Very Interested';
    console.log('CoffeeEnthusiastValue: ', CoffeeEnthusiastlog);
  } else if (CoffeeEnthusiastValue >= 4) {
    if (CoffeeEnthusiastValue % 4 == 0) {
      CoffeeEnthusiastlog = 'not interested';
      console.log('CoffeeEnthusiastValue: ', CoffeeEnthusiastlog);
    }
    if (CoffeeEnthusiastValue % 4 == 1) {
      CoffeeEnthusiastlog = 'Somewhat Interested';
      console.log('CoffeeEnthusiastValue: ', CoffeeEnthusiastlog);
    }
    if (CoffeeEnthusiastValue % 4 == 2) {
      CoffeeEnthusiastlog = 'Interested';
      console.log('CoffeeEnthusiastValue: ', CoffeeEnthusiastlog);
    }
    if (CoffeeEnthusiastValue % 4 == 3) {
      CoffeeEnthusiastlog = 'Very Interested';
      console.log('CoffeeEnthusiastValue: ', CoffeeEnthusiastlog);
    }
  }

  let ClassicalMusicFanlog = '';

  if (ClassicalMusicFanValue == 0) {
    ClassicalMusicFanlog = ' not interested';
    console.log('ClassicalMusicFanValue: ', ClassicalMusicFanlog);
  }
  if (ClassicalMusicFanValue == 1) {
    ClassicalMusicFanlog = 'Somewhat Interested';
    console.log('ClassicalMusicFanValue: ', ClassicalMusicFanlog);
  }
  if (ClassicalMusicFanValue == 2) {
    ClassicalMusicFanlog = ' Interested';
    console.log('ClassicalMusicFanValue: ', ClassicalMusicFanlog);
  }
  if (ClassicalMusicFanValue == 3) {
    ClassicalMusicFanlog = 'Very Interested';
    console.log('ClassicalMusicFanValue: ', ClassicalMusicFanlog);
  } else if (ClassicalMusicFanValue >= 4) {
    if (ClassicalMusicFanValue % 4 == 0) {
      ClassicalMusicFanlog = 'not interested';
      console.log('ClassicalMusicFanValue: ', ClassicalMusicFanlog);
    }
    if (ClassicalMusicFanValue % 4 == 1) {
      ClassicalMusicFanlog = 'Somewhat Interested';
      console.log('ClassicalMusicFanValue: ', ClassicalMusicFanlog);
    }
    if (ClassicalMusicFanValue % 4 == 2) {
      ClassicalMusicFanlog = 'Interested';
      console.log('ClassicalMusicFanValue: ', ClassicalMusicFanlog);
    }
    if (ClassicalMusicFanValue % 4 == 3) {
      ClassicalMusicFanlog = 'Very Interested';
      console.log('ClassicalMusicFanValue: ', ClassicalMusicFanlog);
    }
  }

  let StrangerThingsFanlog = '';

  if (StrangerThingsFanValue == 0) {
    StrangerThingsFanlog =  ' not interested';
    console.log('StrangerThingsFanValue: ', StrangerThingsFanlog);
  }
  if (StrangerThingsFanValue == 1) {
    StrangerThingsFanlog = 'Somewhat Interested';
    console.log('StrangerThingsFanValue: ', StrangerThingsFanlog);
  }
  if (StrangerThingsFanValue == 2) {
    StrangerThingsFanlog = ' Interested';
    console.log('StrangerThingsFanValue: ', StrangerThingsFanlog);
  }
  if (StrangerThingsFanValue == 3) {
    StrangerThingsFanlog = 'Very Interested';
    console.log('StrangerThingsFanValue: ', StrangerThingsFanlog);
  } else if (StrangerThingsFanValue >= 4) {
    if (StrangerThingsFanValue % 4 == 0) {
      StrangerThingsFanlog = 'not interested';
      console.log('StrangerThingsFanValue: ', StrangerThingsFanlog);
    }
    if (StrangerThingsFanValue % 4 == 1) {
      StrangerThingsFanlog = 'Somewhat Interested';
      console.log('StrangerThingsFanValue: ', StrangerThingsFanlog);
    }
    if (StrangerThingsFanValue % 4 == 2) {
      StrangerThingsFanlog = 'Interested';
      console.log('StrangerThingsFanValue: ', StrangerThingsFanlog);
    }
    if (StrangerThingsFanValue % 4 == 3) {
      StrangerThingsFanlog = 'Very Interested';
      console.log('StrangerThingsFanValue: ', StrangerThingsFanlog);
    }
  }

  const navigation = useNavigation();

  const OnUserPressed = () => {
    navigation.navigate('User', {username: username});
  };

  const OnSubmitPress = () => {
    profile = userData;
    profile["Tags"]["Ambitious"] = ambitiousTimesPressed % 4;
    profile["Tags"]["MarvelFan"] = marvelFanValue % 4;
    profile["Tags"]["DCFan"] = DCValue % 4;
    profile["Tags"]["Gamer"] = GamerValue % 4;
    profile["Tags"]["Foodie"] =FoodieValue % 4;
    profile["Tags"]["GymRat"] = GymRatValue % 4;
    profile["Tags"]["AnimeFan"] = AnimeFanValue % 4;
    profile["Tags"]["ArtLover"] = ArtLoverValue % 4;
    profile["Tags"]["FilmBuff"] = FilmBuffValue % 4;
    profile["Tags"]["Homebody"] = HomebodyValue % 4;
    profile["Tags"]["NightOwl"] = NightOwlValue % 4;
    profile["Tags"]["MorningPerson"] = MorningPersonValue % 4;
    profile["Tags"]["ThrillSeeker"] = ThrillSeekerValue % 4;
    profile["Tags"]["CatPerson"] = CatPersonValue % 4;
    profile["Tags"]["DogPerson"] = DogPersonValue % 4;
    profile["Tags"]["EasyGoing"] = EasyGoingValue % 4;
    profile["Tags"]["BeatlesFan"] = BeatlesFanValue % 4;
    profile["Tags"]["Introverted"] = IntrovertedValue % 4;
    profile["Tags"]["Extroverted"] = ExtrovertedValue % 4;
    profile["Tags"]["NatureLover"] = NatureLoverValue % 4;
    profile["Tags"]["BasketballFan"] = BasketballFanValue % 4;
    profile["Tags"]["StarWarsFan"] = StarWarsFanValue % 4;
    profile["Tags"]["CoffeeEnthusiast"] = CoffeeEnthusiastValue % 4;
    profile["Tags"]["ClassicalMusicFan"] = ClassicalMusicFanValue % 4;
    profile["Tags"]["StrangerThingsFan"] = StrangerThingsFanValue % 4;
    fetch(`${url}/update/${username}`, {
      method: 'PUT',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(profile),
    })

      .then((response) => response.json())
      
      .then(data => {
          if (!data['detail']) {
              console.log(data);
              navigation.navigate("User", {username: username});
          }
          else {
              console.log(data['detail']);
          }
      })
      
      .catch((error) => {
          console.error(error);
      })
  };

  return (
    <ImageBackground source ={require('./../../../../../assets/images/editscreen.jpg')} style ={styles.screen}>
    <ScrollView>
      <View>
        <Text style={styles.texting}> Ambitious:</Text>
        <Pressable
          onPress={() => {
            setambitiousTimesPressed(current => current + 1);
            console.log(ambitiousTimesPressed);
          }}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
            },
            styles.wrapperCustom,
          ]}>
          {({pressed}) => (
            <Text style={styles.text}>
              {pressed ? 'Pressed!' : 'click to add tag'}
            </Text>
          )}
        </Pressable>

        <View style={styles.logBox}>
          <Text testID="pressable_press_console">{textLog}</Text>
        </View>

        <Text style={styles.texting}>MarvelFan:</Text>
        <Pressable
          onPress={() => {
            setmarvelFanValue(now => now + 1);
            console.log(marvelFanValue);
          }}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
            },
            styles.wrapperCustom,
          ]}>
          {({pressed}) => (
            <Text style={styles.text}>
              {pressed ? 'Pressed!' : 'click to add tag'}
            </Text>
          )}
        </Pressable>

        <View style={styles.logBox}>
          <Text testID="pressable_press_consoe">{marvelLog}</Text>
        </View>
      </View>

      <Text style={styles.texting}> DCFan:</Text>
      <Pressable
        onPress={() => {
          setDCValue(now => now + 1);
          console.log(DCValue);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'click to add tag'}
          </Text>
        )}
      </Pressable>

      <View style={styles.logBox}>
        <Text testID="pressable_press_consoe">{DClog}</Text>
      </View>

      <Text style={styles.texting}> Gamer:</Text>
      <Pressable
        onPress={() => {
          setGamerValue(now => now + 1);
          console.log(GamerValue);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'click to add tag'}
          </Text>
        )}
      </Pressable>

      <View style={styles.logBox}>
        <Text testID="pressable_press_consoe">{Gamerlog}</Text>
      </View>

      <Text style={styles.texting}> Foodie:</Text>
      <Pressable
        onPress={() => {
          setFoodieValue(now => now + 1);
          console.log(FoodieValue);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'click to add tag'}
          </Text>
        )}
      </Pressable>

      <View style={styles.logBox}>
        <Text testID="pressable_press_consoe">{Foodielog}</Text>
      </View>

      <Text style={styles.texting}>GymRat:</Text>
      <Pressable
        onPress={() => {
          setGymRatValue(now => now + 1);
          console.log(GymRatValue);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'click to add tag'}
          </Text>
        )}
      </Pressable>

      <View style={styles.logBox}>
        <Text testID="pressable_press_consoe">{GymRatlog}</Text>
      </View>

      <Text style={styles.texting}>AnimeFan:</Text>
      <Pressable
        onPress={() => {
          setAnimeFanValue(now => now + 1);
          console.log(AnimeFanValue);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'click to add tag'}
          </Text>
        )}
      </Pressable>

      <View style={styles.logBox}>
        <Text testID="pressable_press_consoe">{AnimeFanlog}</Text>
      </View>

      <Text style={styles.texting}>ArtLover:</Text>
      <Pressable
        onPress={() => {
          setArtLoverValue(now => now + 1);
          console.log(ArtLoverValue);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'click to add tag'}
          </Text>
        )}
      </Pressable>

      <View style={styles.logBox}>
        <Text testID="pressable_press_consoe">{ArtLoverlog}</Text>
      </View>

      <Text style={styles.texting}>FilmBuff:</Text>
      <Pressable
        onPress={() => {
          setFilmBuffValue(now => now + 1);
          console.log(FilmBuffValue);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'click to add tag'}
          </Text>
        )}
      </Pressable>

      <View style={styles.logBox}>
        <Text testID="pressable_press_consoe">{FilmBufflog}</Text>
      </View>

      <Text style={styles.texting}>Homebody:</Text>
      <Pressable
        onPress={() => {
          setHomebodyValue(now => now + 1);
          console.log(HomebodyValue);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'click to add tag'}
          </Text>
        )}
      </Pressable>

      <View style={styles.logBox}>
        <Text testID="pressable_press_consoe">{Homebodylog}</Text>
      </View>

      <Text style={styles.texting}>NightOwl:</Text>
      <Pressable
        onPress={() => {
          setNightOwlValue(now => now + 1);
          console.log(NightOwlValue);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'click to add tag'}
          </Text>
        )}
      </Pressable>

      <View style={styles.logBox}>
        <Text testID="pressable_press_consoe">{NightOwllog}</Text>
      </View>

      <Text style={styles.texting}>CatPerson:</Text>
      <Pressable
        onPress={() => {
          setCatPersonValue(now => now + 1);
          console.log(CatPersonValue);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'click to add tag'}
          </Text>
        )}
      </Pressable>

      <View style={styles.logBox}>
        <Text testID="pressable_press_consoe">{CatPersonlog}</Text>
      </View>

      <Text style={styles.texting}>DogPerson:</Text>
      <Pressable
        onPress={() => {
          setDogPersonValue(now => now + 1);
          console.log(DogPersonValue);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'click to add tag'}
          </Text>
        )}
      </Pressable>

      <View style={styles.logBox}>
        <Text testID="pressable_press_consoe">{DogPersonlog}</Text>
      </View>

      <Text style={styles.texting}>EasyGoing:</Text>
      <Pressable
        onPress={() => {
          setEasyGoingValue(now => now + 1);
          console.log(EasyGoingValue);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'click to add tag'}
          </Text>
        )}
      </Pressable>

      <View style={styles.logBox}>
        <Text testID="pressable_press_consoe">{EasyGoinglog}</Text>
      </View>

      <Text style={styles.texting}>BeatlesFan:</Text>
      <Pressable
        onPress={() => {
          setBeatlesFanValue(now => now + 1);
          console.log(BeatlesFanValue);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'click to add tag'}
          </Text>
        )}
      </Pressable>

      <View style={styles.logBox}>
        <Text testID="pressable_press_consoe">{BeatlesFanlog}</Text>
      </View>

      <Text style={styles.texting}>Extroverted:</Text>
      <Pressable
        onPress={() => {
          setExtrovertedValue(now => now + 1);
          console.log(ExtrovertedValue);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'click to add tag'}
          </Text>
        )}
      </Pressable>

      <View style={styles.logBox}>
        <Text testID="pressable_press_consoe">{Extrovertedlog}</Text>
      </View>

      <Text style={styles.texting}>Introverted:</Text>
      <Pressable
        onPress={() => {
          setIntrovertedValue(now => now + 1);
          console.log(IntrovertedValue);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'click to add tag'}
          </Text>
        )}
      </Pressable>

      <View style={styles.logBox}>
        <Text testID="pressable_press_consoe">{Introvertedlog}</Text>
      </View>

      <Text style={styles.texting}>NatureLover:</Text>
      <Pressable
        onPress={() => {
          setNatureLoverValue(now => now + 1);
          console.log(NatureLoverValue);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'click to add tag'}
          </Text>
        )}
      </Pressable>

      <View style={styles.logBox}>
        <Text testID="pressable_press_consoe">{NatureLoverlog}</Text>
      </View>

      <Text style={styles.texting}>StarWarsFan:</Text>
      <Pressable
        onPress={() => {
          setStarWarsFanValue(now => now + 1);
          console.log(StarWarsFanValue);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'click to add tag'}
          </Text>
        )}
      </Pressable>

      <View style={styles.logBox}>
        <Text testID="pressable_press_consoe">{StarWarsFanlog}</Text>
      </View>

      <Text style={styles.texting}>ThrillSeeker:</Text>
      <Pressable
        onPress={() => {
          setThrillSeekerValue(now => now + 1);
          console.log(ThrillSeekerValue);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'click to add tag'}
          </Text>
        )}
      </Pressable>

      <View style={styles.logBox}>
        <Text testID="pressable_press_consoe">{ThrillSeekerlog}</Text>
      </View>

      <Text style={styles.texting}>BasketballFan:</Text>
      <Pressable
        onPress={() => {
          setBasketballFanValue(now => now + 1);
          console.log(BasketballFanValue);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'click to add tag'}
          </Text>
        )}
      </Pressable>

      <View style={styles.logBox}>
        <Text testID="pressable_press_consoe">{BasketballFanlog}</Text>
      </View>

      <Text style={styles.texting}>MorningPerson:</Text>
      <Pressable
        onPress={() => {
          setMorningPersonValue(now => now + 1);
          console.log(MorningPersonValue);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'click to add tag'}
          </Text>
        )}
      </Pressable>

      <View style={styles.logBox}>
        <Text testID="pressable_press_consoe">{MorningPersonlog}</Text>
      </View>

      <Text style={styles.texting}>CoffeeEnthusiast:</Text>
      <Pressable
        onPress={() => {
          setCoffeeEnthusiastValue(now => now + 1);
          console.log(CoffeeEnthusiastValue);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'click to add tag'}
          </Text>
        )}
      </Pressable>

      <View style={styles.logBox}>
        <Text testID="pressable_press_consoe">{CoffeeEnthusiastlog}</Text>
      </View>

      <Text style={styles.texting}>ClassicalMusicFan:</Text>
      <Pressable
        onPress={() => {
          setClassicalMusicFanValue(now => now + 1);
          console.log(ClassicalMusicFanValue);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'click to add tag'}
          </Text>
        )}
      </Pressable>

      <View style={styles.logBox}>
        <Text testID="pressable_press_consoe">{ClassicalMusicFanlog}</Text>
      </View>

      <Text style={styles.texting}>StrangerThingsFan:</Text>
      <Pressable
        onPress={() => {
          setStrangerThingsFanValue(now => now + 1);
          console.log(StrangerThingsFanValue);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'click to add tag'}
          </Text>
        )}
      </Pressable>

      <View style={styles.logBox}>
        <Text testID="pressable_press_consoe">{StrangerThingsFanlog}</Text>
      </View>

      <CustomButton
        text="Submit"
        onPress={OnSubmitPress}
      />
      <CustomButton text="Return to userScreen" onPress={OnUserPressed} />
      
    </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
texting:{
    fontSize:15,
    fontStyle:'italic',
    fontWeight:'bold',
    textAlign:'center',
    color:'#000000'
  },
  text: {
    fontSize: 17,
    textAlign:'center',
    fontStyle:'italic',
  },
  wrapperCustom: {
    borderRadius: 2,
    padding: 3,
  },
  logBox: {
    padding: 5,
    margin: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'red',
    backgroundColor: 'pink',
  },
  screen:{
    width: '100%',
    height:'100%',
  }
});