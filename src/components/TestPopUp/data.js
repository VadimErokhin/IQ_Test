export const RADIO_TYPE = "radioType";
export const COLOR_TYPE = "colorType";
export const IMG_TYPE = "imgType";

export const steps = [
  {
    question: "Ваш пол:",
    type: RADIO_TYPE,
    options: [
      {
        label: "Мужчина",
        value: "Мужчина",
      },

      {
        label: "Женщина",
        value: "Женщина",
      },
    ],
  },

  {
    question: "Укажите ваш возраст:",
    type: RADIO_TYPE,
    options: [
      {
        label: "До 18",
        value: "До 18",
      },

      {
        label: "От 18 до 28",
        value: "От 18 до 28",
      },

      {
        label: "От 29 до 35",
        value: "От 29 до 35",
      },

      {
        label: "От 36",
        value: "От 36",
      },
    ],
  },

  {
    question: "Выберете лишнее :",
    type: RADIO_TYPE,
    options: [
      {
        label: "Дом",
        value: "Дом",
      },

      {
        label: "Шалаш",
        value: "Шалаш",
      },

      {
        label: "Бунгало",
        value: "Бунгало",
      },

      {
        label: "Скамейка",
        value: "Скамейка",
      },

      {
        label: "Хижина",
        value: "Хижина",
      },
    ],
  },

  {
    question: "Продолжите числовой ряд: 18  20  24  32 ",
    type: RADIO_TYPE,
    options: [
      {
        label: "62",
        value: "62",
      },

      {
        label: "48",
        value: "48",
      },

      {
        label: "74",
        value: "74",
      },

      {
        label: "57",
        value: "57",
      },

      {
        label: "60",
        value: "60",
      },

      {
        label: "77",
        value: "77",
      },
    ],
  },

  {
    question: "Выберите цвет, который сейчас наиболее Вам приятен:",
    type: COLOR_TYPE,
    options: [
      {
        color: '#A8A8A8',
        value: "grey",
      },

      {
        color: '#0000A9',
        value: "blue",
      },

      {
        color: '#00A701',
        value: "green",
      },

      {
        color: "#F60100",
        value: "red",
      },

      {
        color: "#FDFF19",
        value: "yellow",
      },

      {
        color: "#A95403",
        value: "brown",
      },

      {
        color: "#000000",
        value: "black",
      },

      {
        color: "#850068",
        value: "purple",
      },

      {
        color: "#46B2AC",
        value: "turquoise",
      },
    ],
  },

  {
    question: "Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен: ",
    type: COLOR_TYPE,
    options: [
      {
        color: '#A8A8A8',
        value: "grey",
      },

      {
        color: "#46B2AC",
        value: "turquoise",
      },

      {
        color: "#A95403",
        value: "brown",
      },

      {
        color: '#00A701',
        value: "green",
      },

      {
        color: "#000000",
        value: "black",
      },

      {
        color: "#F60100",
        value: "red",
      },

      {
        color: "#850068",
        value: "purple",
      },

      {
        color: "#FDFF19",
        value: "yellow",
      },

      {
        color: '#0000A9',
        value: "blue",
      },
    ],
  },

  {
    question: "Какой из городов лишний?",
    type: RADIO_TYPE,
    options: [
      {
        label: "Вашингтон",
        value: "Вашингтон",
      },

      {
        label: "Лондон",
        value: "Лондон",
      },

      {
        label: "Париж",
        value: "Париж",
      },

      {
        label: "Нью-Йорк",
        value: "Нью-Йорк",
      },

      {
        label: "Москва",
        value: "Москва",
      },

      {
        label: "Оттава",
        value: "Оттава",
      },
    ],
  },

  {
    question: "Выберите правильную фигуру из четырёх пронумерованных:",
    type: IMG_TYPE,
    image: require('../../img/people.png'),
    options: [
      {
        label: "1",
        value: "1",
      },

      {
        label: "2",
        value: "2",
      },

      {
        label: "3",
        value: "3",
      },

      {
        label: "4",
        value: "4",
      },

    ],
  },

  {
    question: "Вам привычнее и важнее:",
    type: RADIO_TYPE,
    options: [
      {
        label: "Наслаждатьс каждой минутой проведенного времени",
        value: "Наслаждатьс каждой минутой проведенного времени",
      },

      {
        label: "Быть устремленными мыслями в будущее",
        value: "Быть устремленными мыслями в будущее",
      },

      {
        label: "Учитывать в ежедневной практике прошлый опыт",
        value: "Учитывать в ежедневной практике прошлый опыт",
      },
    ],
  },

  {
  question: "Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: ",
  type: RADIO_TYPE,
  image: require('../../img/rhomb.png'),
  options: [
    {
      label: "Оно остроконечное",
      value: "Оно остроконечное",
    },

    {
      label: "Оно устойчиво",
      value: "Оно устойчиво",
    },

    {
      label: "Оно-находится в состоянии равновесия",
      value: "Оно-находится в состоянии равновесия",
    },

  ],
},
  {
  question: "Вставьте подходящее число:",
  type: IMG_TYPE,
  image: require('../../img/star.svg'),
  options: [
    {
      label: "33",
      value: "33",
    },

    {
      label: "36",
      value: "36",
    },

    {
      label: "53",
      value: "53",
    },

    {
      label: "44",
      value: "44",
    },

    {
      label: "66",
      value: "66",
    },

    {
      label: "42",
      value: "42",
    },

  ],
},
];
