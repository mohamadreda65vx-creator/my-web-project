// ============ SPEECH SYNTHESIS ENGINE ============
function playAudio(text, event) {
  if (event) event.stopPropagation();
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US'; 
    utterance.rate = 0.65; // Slower 
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  } else {
   alert('عذراً، متصفحك الحالي لا يدعم خاصية نطق الصوت.');
  }
}

// ============ DATA ============

const alphabetData = [
  {
    "letter": "A",
    "sound": "eɪ",
    "type": "vowel",
    "examples": [
      {
        "word": "Apple",
        "emoji": "🍎",
        "ar": "تفاحة"
      }
    ],
    "arabic": "حرف A يشبه الألف."
  },
  {
    "letter": "B",
    "sound": "biː",
    "type": "consonant",
    "examples": [
      {
        "word": "Ball",
        "emoji": "⚽",
        "ar": "كرة"
      }
    ],
    "arabic": "مطابق لصوت الباء."
  },
  {
    "letter": "C",
    "sound": "siː",
    "type": "consonant",
    "examples": [
      {
        "word": "Cat",
        "emoji": "🐱",
        "ar": "قطة"
      }
    ],
    "arabic": "ينطق كـ (ك) أو (س)."
  },
  {
    "letter": "D",
    "sound": "diː",
    "type": "consonant",
    "examples": [
      {
        "word": "Dog",
        "emoji": "🐶",
        "ar": "كلب"
      }
    ],
    "arabic": "مطابق لصوت الدال."
  },
  {
    "letter": "E",
    "sound": "iː",
    "type": "vowel",
    "examples": [
      {
        "word": "Egg",
        "emoji": "🥚",
        "ar": "بيضة"
      }
    ],
    "arabic": "حرف علة مهم جداً."
  },
  {
    "letter": "F",
    "sound": "ɛf",
    "type": "consonant",
    "examples": [
      {
        "word": "Fish",
        "emoji": "🐟",
        "ar": "سمكة"
      }
    ],
    "arabic": "يشبه الفاء."
  },
  {
    "letter": "G",
    "sound": "dʒiː",
    "type": "consonant",
    "examples": [
      {
        "word": "Goat",
        "emoji": "🐐",
        "ar": "ماعز"
      }
    ],
    "arabic": "يشبه الجيم أو القاف."
  },
  {
    "letter": "H",
    "sound": "eɪtʃ",
    "type": "consonant",
    "examples": [
      {
        "word": "House",
        "emoji": "🏠",
        "ar": "بيت"
      }
    ],
    "arabic": "حرف خفيف يشبه الهاء."
  },
  {
    "letter": "I",
    "sound": "aɪ",
    "type": "vowel",
    "examples": [
      {
        "word": "Ice",
        "emoji": "🧊",
        "ar": "ثلج"
      }
    ],
    "arabic": "ينطق (آي) أو (إ)."
  },
  {
    "letter": "J",
    "sound": "dʒeɪ",
    "type": "consonant",
    "examples": [
      {
        "word": "Juice",
        "emoji": "🧃",
        "ar": "عصير"
      }
    ],
    "arabic": "جيم معطشة."
  },
  {
    "letter": "K",
    "sound": "keɪ",
    "type": "consonant",
    "examples": [
      {
        "word": "Key",
        "emoji": "🗝️",
        "ar": "مفتاح"
      }
    ],
    "arabic": "مثل حرف الكاف."
  },
  {
    "letter": "L",
    "sound": "ɛl",
    "type": "consonant",
    "examples": [
      {
        "word": "Lion",
        "emoji": "🦁",
        "ar": "أسد"
      }
    ],
    "arabic": "مثل اللام."
  },
  {
    "letter": "M",
    "sound": "ɛm",
    "type": "consonant",
    "examples": [
      {
        "word": "Moon",
        "emoji": "🌙",
        "ar": "قمر"
      }
    ],
    "arabic": "مثل الميم."
  },
  {
    "letter": "N",
    "sound": "ɛn",
    "type": "consonant",
    "examples": [
      {
        "word": "Night",
        "emoji": "🌙",
        "ar": "ليل"
      }
    ],
    "arabic": "مثل النون."
  },
  {
    "letter": "O",
    "sound": "oʊ",
    "type": "vowel",
    "examples": [
      {
        "word": "Orange",
        "emoji": "🍊",
        "ar": "برتقالة"
      }
    ],
    "arabic": "حرف علة مضموم."
  },
  {
    "letter": "P",
    "sound": "piː",
    "type": "consonant",
    "examples": [
      {
        "word": "Panda",
        "emoji": "🐼",
        "ar": "باندا"
      }
    ],
    "arabic": "باء مع نفخ هواء."
  },
  {
    "letter": "Q",
    "sound": "kjuː",
    "type": "consonant",
    "examples": [
      {
        "word": "Queen",
        "emoji": "👸",
        "ar": "ملكة"
      }
    ],
    "arabic": "دائما يتبعه u (كو)."
  },
  {
    "letter": "R",
    "sound": "ɑːr",
    "type": "consonant",
    "examples": [
      {
        "word": "Rabbit",
        "emoji": "🐰",
        "ar": "أرنب"
      }
    ],
    "arabic": "يشبه الراء المدمجة."
  },
  {
    "letter": "S",
    "sound": "ɛs",
    "type": "consonant",
    "examples": [
      {
        "word": "Sun",
        "emoji": "☀️",
        "ar": "شمس"
      }
    ],
    "arabic": "مثل السين."
  },
  {
    "letter": "T",
    "sound": "tiː",
    "type": "consonant",
    "examples": [
      {
        "word": "Tree",
        "emoji": "🌳",
        "ar": "شجرة"
      }
    ],
    "arabic": "مثل التاء."
  },
  {
    "letter": "U",
    "sound": "juː",
    "type": "vowel",
    "examples": [
      {
        "word": "Umbrella",
        "emoji": "☂️",
        "ar": "شمسية"
      }
    ],
    "arabic": "حرف علة (يو/أ)."
  },
  {
    "letter": "V",
    "sound": "viː",
    "type": "consonant",
    "examples": [
      {
        "word": "Van",
        "emoji": "🚐",
        "ar": "شاحنة"
      }
    ],
    "arabic": "من الأسنان العلوية والشفة."
  },
  {
    "letter": "W",
    "sound": "dʌbljuː",
    "type": "consonant",
    "examples": [
      {
        "word": "Water",
        "emoji": "💧",
        "ar": "ماء"
      }
    ],
    "arabic": "مثل الواو."
  },
  {
    "letter": "X",
    "sound": "ɛks",
    "type": "consonant",
    "examples": [
      {
        "word": "X-ray",
        "emoji": "🩻",
        "ar": "أشعة X"
      }
    ],
    "arabic": "ينطق إكس."
  },
  {
    "letter": "Y",
    "sound": "waɪ",
    "type": "consonant",
    "examples": [
      {
        "word": "Yellow",
        "emoji": "💛",
        "ar": "أصفر"
      }
    ],
    "arabic": "في البداية ينطق ياء."
  },
  {
    "letter": "Z",
    "sound": "ziː",
    "type": "consonant",
    "examples": [
      {
        "word": "Zero",
        "emoji": "0️⃣",
        "ar": "صفر"
      }
    ],
    "arabic": "مثل الزاي."
  }
];

const grammarData = [
  {
    "id": 1,
    "icon": "👤",
    "level": "basic",
    "levelAr": "أساسي",
    "title": "الضمائر الشخصية",
    "en": "Personal Pronouns",
    "desc": "الضمائر تحل محل الأسماء في الجمل لتجنب التكرار.",
    "examples": [
      {
        "en": "I am a student.",
        "ar": "أنا طالب."
      },
      {
        "en": "She is happy.",
        "ar": "هي سعيدة."
      }
    ],
    "rules": [
      {
        "h": "الضمائر الأساسية",
        "p": "I (أنا) - You (أنت/أنتم) - He (هو) - She (هي) - It (هو/هي لغير العاقل) - We (نحن) - They (هم)"
      }
    ],
    "explanation": "الضمائر هي الركيزة الأساسية لأي جملة إنجليزية. بدلاً من قول \"أحمد يدرس\"، \"أحمد يحب القهوة\"، نقول \"أحمد يدرس، هو يحب القهوة\". في الإنجليزية، لا توجد جملة بدون فاعل، فإذا لم يكن هناك اسم صريح، نستخدم الضمير المناسب. انتبه لـ It فهي تستخدم للقطط، الأشجار، الطاولات، وأي شيء ليس بشراً. بدون الضمائر، ستكون لغتنا ركيكة ومملة بسبب تكرار الأسماء.",
    "mindmap": {
      "center": "الضمائر 👤",
      "branches": [
        {
          "t": "I",
          "d": "للمتكلم"
        },
        {
          "t": "He/She/It",
          "d": "للمفرد الغائب"
        },
        {
          "t": "We/You/They",
          "d": "للجمع والمخاطب"
        }
      ]
    }
  },
  {
    "id": 2,
    "icon": "🔗",
    "level": "basic",
    "levelAr": "أساسي",
    "title": "فعل To Be",
    "en": "Verb To Be",
    "desc": "أهم فعل للتعريف بالهوية والوصف والزمان.",
    "examples": [
      {
        "en": "He is tall.",
        "ar": "هو طويل."
      },
      {
        "en": "They are friends.",
        "ar": "هم أصدقاء."
      }
    ],
    "rules": [
      {
        "h": "التصريف",
        "p": "I + am | He/She/It + is | You/We/They + are"
      }
    ],
    "explanation": "فعل (To Be) هو فعل الكينونة. في العربية نحذفه غالباً فنقول \"أنا معلم\"، لكن في الإنجليزية \"أنا أكون معلماً\". هو يتغير حسب الفاعل: Am للمتكلم فقط، Is للمفرد الغائب، و Are للجمع والمخاطب. استخدامه ضروري جداً عند الوصف بالصفات (is tall) أو التعريف بالوظائف (is a doctor). لا تخلط أبداً بين I is أو He am، فهذه أخطاء شائعة جداً يقع فيها المبتدئون.",
    "mindmap": {
      "center": "To Be 🔗",
      "branches": [
        {
          "t": "Am",
          "d": "مع I فقط"
        },
        {
          "t": "Is",
          "d": "للمفرد (He/She/It)"
        },
        {
          "t": "Are",
          "d": "للجمع (We/You/They)"
        }
      ]
    }
  },
  {
    "id": 3,
    "icon": "⏰",
    "level": "tenses",
    "levelAr": "زمن",
    "title": "المضارع البسيط",
    "en": "Simple Present Tense",
    "desc": "يُستخدم للتعبير عن الحقائق العلمية والعادات اليومية المتكررة.",
    "examples": [
      {
        "en": "She drinks coffee.",
        "ar": "هي تشرب القهوة (عادة)."
      },
      {
        "en": "The sun rises in the east.",
        "ar": "الشمس تشرق من الشرق (حقيقة)."
      }
    ],
    "rules": [
      {
        "h": "قاعدة الـ S",
        "p": "نضيف s أو es للفعل فقط مع الضمائر المفردة (He, She, It)"
      }
    ],
    "explanation": "المضارع البسيط هو زمن الروتين والحقائق. القاعدة الذهبية هنا: الأفعال تحب حرف (s) إذا كان الفاعل مفرداً غائباً (He, She, It). أما مع (I, We, You, They) فيبقى الفعل كما هو بدون أي إضافة. نستخدمه عندما نتحدث عن أشياء تتكرر دائماً مثل مواعيد العمل، الهوايات، أو حتى الحقائق الكونية التي لا تتغير أبداً مثل دوران الأرض.",
    "mindmap": {
      "center": "المضارع البسيط ⏰",
      "branches": [
        {
          "t": "بدون S",
          "d": "مع I, We, You, They"
        },
        {
          "t": "مع S",
          "d": "مع He, She, It"
        }
      ]
    }
  },
  {
    "id": 4,
    "icon": "▶️",
    "level": "tenses",
    "levelAr": "زمن",
    "title": "المضارع المستمر",
    "en": "Present Continuous",
    "desc": "لوصف أحداث تقع الآن في لحظة الكلام.",
    "examples": [
      {
        "en": "They are running now.",
        "ar": "هم يركضون الآن."
      },
      {
        "en": "I am studying English.",
        "ar": "أنا أدرس الإنجليزية حالياً."
      }
    ],
    "rules": [
      {
        "h": "التركيبة",
        "p": "[am/is/are] + [الفعل] + [ing]"
      }
    ],
    "explanation": "هذا الزمن هو \"كاميرا التصوير\" التي تصور ما يحدث الآن. يتكون دائماً من ثلاثة أجزاء: فعل مساعد (am/is/are) ثم الفعل الأساسي ثم إضافة (ing) في نهايته. إذا حذفت أي جزء تصبح الجملة خاطئة. كلمة (Now) أو (Look) هي مفاتيح تدل على استخدام هذا الزمن. مثال: Look! It is raining. انظر! إنها تمطر الآن.",
    "mindmap": {
      "center": "المضارع المستمر ▶️",
      "branches": [
        {
          "t": "Am+V-ing",
          "d": "أنا الآن"
        },
        {
          "t": "Is+V-ing",
          "d": "هو/هي الآن"
        },
        {
          "t": "Are+V-ing",
          "d": "هم/نحن الآن"
        }
      ]
    }
  },
  {
    "id": 5,
    "icon": "⬅️",
    "level": "tenses",
    "levelAr": "زمن",
    "title": "الماضي البسيط",
    "en": "Simple Past Tense",
    "desc": "يُستخدم للأحداث التي بدأت وانتهت تماماً في الماضي.",
    "examples": [
      {
        "en": "I walked to school.",
        "ar": "مشيت للمدرسة (بالأمس)."
      },
      {
        "en": "He saw a movie.",
        "ar": "هو رأى فيلماً."
      }
    ],
    "rules": [
      {
        "h": "الأفعال",
        "p": "المنتظمة تأخذ ed، والشاذة يتغير شكلها (Irregular Verbs)"
      }
    ],
    "explanation": "الماضي البسيط يحكي قصصاً انتهت. الأفعال فيه نوعان: أفعال \"مطيعة\" تكتفي بإضافة (ed) في آخرها مثل Play تصبح Played، وأفعال \"متمردة\" أو شاذة يتغير شكلها تماماً مثل Go تصبح Went. لا يوجد حل لهذه الأفعال إلا حفظها بالممارسة وكثرة القراءة والاستماع. نستخدمه لنحكي ما فعلناه في عطلة نهاية الأسبوع أو العام الماضي.",
    "mindmap": {
      "center": "الماضي البسيط ⬅️",
      "branches": [
        {
          "t": "منتظم",
          "d": "إضافة ed (مثل Play->Played)"
        },
        {
          "t": "شاذ",
          "d": "يتغير كلياً (مثل Go->Went)"
        }
      ]
    }
  },
  {
    "id": 6,
    "icon": "➡️",
    "level": "tenses",
    "levelAr": "زمن",
    "title": "المستقبل البسيط",
    "en": "Simple Future",
    "desc": "للتعبير عن قرارات مستقبلية أو توقعات.",
    "examples": [
      {
        "en": "I will travel tomorrow.",
        "ar": "سأسافر غداً."
      },
      {
        "en": "It will rain later.",
        "ar": "سوف تمطر لاحقاً."
      }
    ],
    "rules": [
      {
        "h": "التركيب",
        "p": "استخدام Will قبل الفعل في حالته الأصلية (المصدر)"
      }
    ],
    "explanation": "أسهل زمن في الإنجليزية! فقط ضع كلمة (Will) بمعنى \"سوف\" قبل أي فعل لتقول أنك ستفعله مستقبلاً. الجميل هنا أن الفعل بعد Will لا يتغير أبداً ولا نضيف له أي شيء مهما كان الفاعل. هناك أيضاً (Going to) التي تستخدم للخطط المؤكدة مسبقاً، بينما Will تستخدم أكثر للقرارات اللحظية أو التوقعات العامة.",
    "mindmap": {
      "center": "المستقبل ➡️",
      "branches": [
        {
          "t": "Will",
          "d": "قرار سريع أو توقع"
        },
        {
          "t": "Going to",
          "d": "نية أو خطة مسبقة"
        }
      ]
    }
  },
  {
    "id": 11,
    "icon": "📅",
    "level": "tenses",
    "levelAr": "زمن",
    "title": "الماضي المستمر",
    "en": "Past Continuous",
    "desc": "لوصف حدث كان مستمراً لفترة في الماضي أو قطعه حدث آخر.",
    "examples": [
      {
        "en": "I was eating when the phone rang.",
        "ar": "كنت آكل عندما رن الهاتف."
      }
    ],
    "rules": [
      {
        "h": "التركيب",
        "p": "[was/were] + [الفعل] + [ing]"
      }
    ],
    "explanation": "يستخدم لوصف \"خلفية\" الأحداث في الماضي. تخيل أنك كنت تشاهد التلفاز لفترة (حدث مستمر)، ثم فجأة طرق أحدهم الباب (حدث قاطع). نستخدم Was للمفرد و Were للجمع، ودائماً نضيف ing للفعل ليدل على طول المدة. هو الزمن المفضل لدى كتاب الروايات لوصف المشاهد الافتتاحية.",
    "mindmap": {
      "center": "الماضي المستمر 📅",
      "branches": [
        {
          "t": "Was + ing",
          "d": "للمفرد (I, He, She, It)"
        },
        {
          "t": "Were + ing",
          "d": "للجمع (We, You, They)"
        }
      ]
    }
  },
  {
    "id": 13,
    "icon": "💡",
    "level": "basic",
    "levelAr": "أساسي",
    "title": "قاعدة If الحالة الأولى",
    "en": "If Conditional (First)",
    "desc": "تستخدم للتعبير عن نتائج مستقبلية محتملة تعتمد على شرط معين.",
    "examples": [
      {
        "en": "If you study, you will pass.",
        "ar": "إذا درست، سوف تنجح."
      }
    ],
    "rules": [
      {
        "h": "التركيب",
        "p": "[If + مضارع بسيط] ، [مستقبل بسيط - Will]"
      }
    ],
    "explanation": "هذه القاعدة هي قاعدة \"السبب والنتيجة\". تتكون الجملة من جزئين: فعل الشرط ويكون في المضارع البسيط، وجواب الشرط ويكون في المستقبل باستخدام Will. هي تعبر عن أشياء من الممكن جداً حدوثها في الواقع. مثال: If I have money, I will buy a car. إذا كان معي مال، سأشتري سيارة.",
    "mindmap": {
      "center": "قاعدة If 💡",
      "branches": [
        {
          "t": "الجزء الأول",
          "d": "مضارع بسيط (شرط)"
        },
        {
          "t": "الجزء الثاني",
          "d": "مستقبل Will (نتيجة)"
        }
      ]
    }
  }
];

const vocabData = [
  {n:1, word:"Lion", phon:"/lion/", mean:"أسد", cat:"animal", ex:"This is a lion."},
  {n:2, word:"Tiger", phon:"/tiger/", mean:"نمر", cat:"animal", ex:"This is a tiger."},
  {n:3, word:"Elephant", phon:"/elephant/", mean:"فيل", cat:"animal", ex:"This is a elephant."},
  {n:4, word:"Giraffe", phon:"/giraffe/", mean:"زرافة", cat:"animal", ex:"This is a giraffe."},
  {n:5, word:"Zebra", phon:"/zebra/", mean:"حمار وحشي", cat:"animal", ex:"This is a zebra."},
  {n:6, word:"Monkey", phon:"/monkey/", mean:"قرد", cat:"animal", ex:"This is a monkey."},
  {n:7, word:"Dog", phon:"/dog/", mean:"كلب", cat:"animal", ex:"This is a dog."},
  {n:8, word:"Cat", phon:"/cat/", mean:"قطة", cat:"animal", ex:"This is a cat."},
  {n:9, word:"Mouse", phon:"/mouse/", mean:"فأر", cat:"animal", ex:"This is a mouse."},
  {n:10, word:"Rabbit", phon:"/rabbit/", mean:"أرنب", cat:"animal", ex:"This is a rabbit."},
  {n:11, word:"Bear", phon:"/bear/", mean:"دب", cat:"animal", ex:"This is a bear."},
  {n:12, word:"Panda", phon:"/panda/", mean:"باندا", cat:"animal", ex:"This is a panda."},
  {n:13, word:"Kangaroo", phon:"/kangaroo/", mean:"كنغر", cat:"animal", ex:"This is a kangaroo."},
  {n:14, word:"Fox", phon:"/fox/", mean:"ثعلب", cat:"animal", ex:"This is a fox."},
  {n:15, word:"Wolf", phon:"/wolf/", mean:"ذئب", cat:"animal", ex:"This is a wolf."},
  {n:16, word:"Deer", phon:"/deer/", mean:"غزال", cat:"animal", ex:"This is a deer."},
  {n:17, word:"Horse", phon:"/horse/", mean:"حصان", cat:"animal", ex:"This is a horse."},
  {n:18, word:"Cow", phon:"/cow/", mean:"بقرة", cat:"animal", ex:"This is a cow."},
  {n:19, word:"Pig", phon:"/pig/", mean:"خنزير", cat:"animal", ex:"This is a pig."},
  {n:20, word:"Sheep", phon:"/sheep/", mean:"خروف", cat:"animal", ex:"This is a sheep."},
  {n:21, word:"Goat", phon:"/goat/", mean:"ماعز", cat:"animal", ex:"This is a goat."},
  {n:22, word:"Camel", phon:"/camel/", mean:"جمل", cat:"animal", ex:"This is a camel."},
  {n:23, word:"Hippopotamus", phon:"/hippopotamus/", mean:"فرس النهر", cat:"animal", ex:"This is a hippopotamus."},
  {n:24, word:"Rhinoceros", phon:"/rhinoceros/", mean:"وحيد القرن", cat:"animal", ex:"This is a rhinoceros."},
  {n:25, word:"Leopard", phon:"/leopard/", mean:"فهد", cat:"animal", ex:"This is a leopard."},
  {n:26, word:"Cheetah", phon:"/cheetah/", mean:"فهد صياد", cat:"animal", ex:"This is a cheetah."},
  {n:27, word:"Gorilla", phon:"/gorilla/", mean:"غوريلا", cat:"animal", ex:"This is a gorilla."},
  {n:28, word:"Koala", phon:"/koala/", mean:"كوالا", cat:"animal", ex:"This is a koala."},
  {n:29, word:"Sloth", phon:"/sloth/", mean:"كسلان", cat:"animal", ex:"This is a sloth."},
  {n:30, word:"Hedgehog", phon:"/hedgehog/", mean:"قنفذ", cat:"animal", ex:"This is a hedgehog."},
  {n:31, word:"Eagle", phon:"/eagle/", mean:"نسر", cat:"bird", ex:"This is a eagle."},
  {n:32, word:"Hawk", phon:"/hawk/", mean:"صقر", cat:"bird", ex:"This is a hawk."},
  {n:33, word:"Owl", phon:"/owl/", mean:"بومة", cat:"bird", ex:"This is a owl."},
  {n:34, word:"Parrot", phon:"/parrot/", mean:"ببغاء", cat:"bird", ex:"This is a parrot."},
  {n:35, word:"Penguin", phon:"/penguin/", mean:"بطريق", cat:"bird", ex:"This is a penguin."},
  {n:36, word:"Ostrich", phon:"/ostrich/", mean:"نعامة", cat:"bird", ex:"This is a ostrich."},
  {n:37, word:"Peacock", phon:"/peacock/", mean:"طاووس", cat:"bird", ex:"This is a peacock."},
  {n:38, word:"Swan", phon:"/swan/", mean:"بجعة", cat:"bird", ex:"This is a swan."},
  {n:39, word:"Duck", phon:"/duck/", mean:"بطة", cat:"bird", ex:"This is a duck."},
  {n:40, word:"Goose", phon:"/goose/", mean:"إوزة", cat:"bird", ex:"This is a goose."},
  {n:41, word:"Chicken", phon:"/chicken/", mean:"دجاجة", cat:"bird", ex:"This is a chicken."},
  {n:42, word:"Rooster", phon:"/rooster/", mean:"ديك", cat:"bird", ex:"This is a rooster."},
  {n:43, word:"Pigeon", phon:"/pigeon/", mean:"حمامة", cat:"bird", ex:"This is a pigeon."},
  {n:44, word:"Dove", phon:"/dove/", mean:"حمامة السلام", cat:"bird", ex:"This is a dove."},
  {n:45, word:"Crow", phon:"/crow/", mean:"غراب", cat:"bird", ex:"This is a crow."},
  {n:46, word:"Flamingo", phon:"/flamingo/", mean:"فلامنغو", cat:"bird", ex:"This is a flamingo."},
  {n:47, word:"Seagull", phon:"/seagull/", mean:"نورس", cat:"bird", ex:"This is a seagull."},
  {n:48, word:"Woodpecker", phon:"/woodpecker/", mean:"نقار الخشب", cat:"bird", ex:"This is a woodpecker."},
  {n:49, word:"Hummingbird", phon:"/hummingbird/", mean:"طائر الطنان", cat:"bird", ex:"This is a hummingbird."},
  {n:50, word:"Sparrow", phon:"/sparrow/", mean:"عصفور", cat:"bird", ex:"This is a sparrow."},
  {n:51, word:"Tree", phon:"/tree/", mean:"شجرة", cat:"plant", ex:"This is a tree."},
  {n:52, word:"Flower", phon:"/flower/", mean:"زهرة", cat:"plant", ex:"This is a flower."},
  {n:53, word:"Grass", phon:"/grass/", mean:"عشب", cat:"plant", ex:"This is a grass."},
  {n:54, word:"Leaf", phon:"/leaf/", mean:"ورقة شجر", cat:"plant", ex:"This is a leaf."},
  {n:55, word:"Branch", phon:"/branch/", mean:"غصن", cat:"plant", ex:"This is a branch."},
  {n:56, word:"Root", phon:"/root/", mean:"جذر", cat:"plant", ex:"This is a root."},
  {n:57, word:"Seed", phon:"/seed/", mean:"بذرة", cat:"plant", ex:"This is a seed."},
  {n:58, word:"Rose", phon:"/rose/", mean:"وردة", cat:"plant", ex:"This is a rose."},
  {n:59, word:"Tulip", phon:"/tulip/", mean:"توليب", cat:"plant", ex:"This is a tulip."},
  {n:60, word:"Sunflower", phon:"/sunflower/", mean:"عباد الشمس", cat:"plant", ex:"This is a sunflower."},
  {n:61, word:"Cactus", phon:"/cactus/", mean:"صبار", cat:"plant", ex:"This is a cactus."},
  {n:62, word:"Pine tree", phon:"/pine tree/", mean:"شجرة الصنوبر", cat:"plant", ex:"This is a pine tree."},
  {n:63, word:"Palm tree", phon:"/palm tree/", mean:"شجرة النخيل", cat:"plant", ex:"This is a palm tree."},
  {n:64, word:"Bush", phon:"/bush/", mean:"شجيرة", cat:"plant", ex:"This is a bush."},
  {n:65, word:"Fern", phon:"/fern/", mean:"سرخس", cat:"plant", ex:"This is a fern."},
  {n:66, word:"Bamboo", phon:"/bamboo/", mean:"خيزران", cat:"plant", ex:"This is a bamboo."},
  {n:67, word:"Mushroom", phon:"/mushroom/", mean:"فطر", cat:"plant", ex:"This is a mushroom."},
  {n:68, word:"Moss", phon:"/moss/", mean:"طحلب", cat:"plant", ex:"This is a moss."},
  {n:69, word:"Vine", phon:"/vine/", mean:"كرمة", cat:"plant", ex:"This is a vine."},
  {n:70, word:"Lily", phon:"/lily/", mean:"زنبق", cat:"plant", ex:"This is a lily."},
  {n:71, word:"Apple", phon:"/apple/", mean:"تفاحة", cat:"food", ex:"This is a apple."},
  {n:72, word:"Banana", phon:"/banana/", mean:"موز", cat:"food", ex:"This is a banana."},
  {n:73, word:"Orange", phon:"/orange/", mean:"برتقال", cat:"food", ex:"This is a orange."},
  {n:74, word:"Grape", phon:"/grape/", mean:"عنب", cat:"food", ex:"This is a grape."},
  {n:75, word:"Strawberry", phon:"/strawberry/", mean:"فراولة", cat:"food", ex:"This is a strawberry."},
  {n:76, word:"Watermelon", phon:"/watermelon/", mean:"بطيخ", cat:"food", ex:"This is a watermelon."},
  {n:77, word:"Pineapple", phon:"/pineapple/", mean:"أناناس", cat:"food", ex:"This is a pineapple."},
  {n:78, word:"Mango", phon:"/mango/", mean:"مانجو", cat:"food", ex:"This is a mango."},
  {n:79, word:"Lemon", phon:"/lemon/", mean:"ليمون", cat:"food", ex:"This is a lemon."},
  {n:80, word:"Peach", phon:"/peach/", mean:"خوخ", cat:"food", ex:"This is a peach."},
  {n:81, word:"Cherry", phon:"/cherry/", mean:"كرز", cat:"food", ex:"This is a cherry."},
  {n:82, word:"Tomato", phon:"/tomato/", mean:"طماطم", cat:"food", ex:"This is a tomato."},
  {n:83, word:"Potato", phon:"/potato/", mean:"بطاطس", cat:"food", ex:"This is a potato."},
  {n:84, word:"Carrot", phon:"/carrot/", mean:"جزر", cat:"food", ex:"This is a carrot."},
  {n:85, word:"Onion", phon:"/onion/", mean:"بصل", cat:"food", ex:"This is a onion."},
  {n:86, word:"Garlic", phon:"/garlic/", mean:"ثوم", cat:"food", ex:"This is a garlic."},
  {n:87, word:"Cucumber", phon:"/cucumber/", mean:"خيار", cat:"food", ex:"This is a cucumber."},
  {n:88, word:"Pepper", phon:"/pepper/", mean:"فلفل", cat:"food", ex:"This is a pepper."},
  {n:89, word:"Corn", phon:"/corn/", mean:"ذرة", cat:"food", ex:"This is a corn."},
  {n:90, word:"Broccoli", phon:"/broccoli/", mean:"بروكلي", cat:"food", ex:"This is a broccoli."},
  {n:91, word:"Bread", phon:"/bread/", mean:"خبز", cat:"food", ex:"This is a bread."},
  {n:92, word:"Rice", phon:"/rice/", mean:"أرز", cat:"food", ex:"This is a rice."},
  {n:93, word:"Pasta", phon:"/pasta/", mean:"معكرونة", cat:"food", ex:"This is a pasta."},
  {n:94, word:"Meat", phon:"/meat/", mean:"لحم", cat:"food", ex:"This is a meat."},
  {n:95, word:"Fish", phon:"/fish/", mean:"سمك", cat:"food", ex:"This is a fish."},
  {n:96, word:"Egg", phon:"/egg/", mean:"بيض", cat:"food", ex:"This is a egg."},
  {n:97, word:"Cheese", phon:"/cheese/", mean:"جبن", cat:"food", ex:"This is a cheese."},
  {n:98, word:"Milk", phon:"/milk/", mean:"حليب", cat:"food", ex:"This is a milk."},
  {n:99, word:"Butter", phon:"/butter/", mean:"زبدة", cat:"food", ex:"This is a butter."},
  {n:100, word:"Salt", phon:"/salt/", mean:"ملح", cat:"food", ex:"This is a salt."},
  {n:101, word:"Sugar", phon:"/sugar/", mean:"سكر", cat:"food", ex:"This is a sugar."},
  {n:102, word:"Cake", phon:"/cake/", mean:"كعكة", cat:"food", ex:"This is a cake."},
  {n:103, word:"Chocolate", phon:"/chocolate/", mean:"شوكولاتة", cat:"food", ex:"This is a chocolate."},
  {n:104, word:"Ice cream", phon:"/ice cream/", mean:"مثلجات", cat:"food", ex:"This is a ice cream."},
  {n:105, word:"Cookie", phon:"/cookie/", mean:"بسكويت", cat:"food", ex:"This is a cookie."},
  {n:106, word:"Water", phon:"/water/", mean:"ماء", cat:"food", ex:"This is a water."},
  {n:107, word:"Coffee", phon:"/coffee/", mean:"قهوة", cat:"food", ex:"This is a coffee."},
  {n:108, word:"Tea", phon:"/tea/", mean:"شاي", cat:"food", ex:"This is a tea."},
  {n:109, word:"Juice", phon:"/juice/", mean:"عصير", cat:"food", ex:"This is a juice."},
  {n:110, word:"Head", phon:"/head/", mean:"رأس", cat:"body", ex:"I am head."},
  {n:111, word:"Hair", phon:"/hair/", mean:"شعر", cat:"body", ex:"I am hair."},
  {n:112, word:"Face", phon:"/face/", mean:"وجه", cat:"body", ex:"I am face."},
  {n:113, word:"Eye", phon:"/eye/", mean:"عين", cat:"body", ex:"I am eye."},
  {n:114, word:"Ear", phon:"/ear/", mean:"أذن", cat:"body", ex:"I am ear."},
  {n:115, word:"Nose", phon:"/nose/", mean:"أنف", cat:"body", ex:"I am nose."},
  {n:116, word:"Mouth", phon:"/mouth/", mean:"فم", cat:"body", ex:"I am mouth."},
  {n:117, word:"Tooth", phon:"/tooth/", mean:"سن", cat:"body", ex:"I am tooth."},
  {n:118, word:"Tongue", phon:"/tongue/", mean:"لسان", cat:"body", ex:"I am tongue."},
  {n:119, word:"Neck", phon:"/neck/", mean:"رقبة", cat:"body", ex:"I am neck."},
  {n:120, word:"Shoulder", phon:"/shoulder/", mean:"كتف", cat:"body", ex:"I am shoulder."},
  {n:121, word:"Arm", phon:"/arm/", mean:"ذراع", cat:"body", ex:"I am arm."},
  {n:122, word:"Elbow", phon:"/elbow/", mean:"مرفق", cat:"body", ex:"I am elbow."},
  {n:123, word:"Hand", phon:"/hand/", mean:"يد", cat:"body", ex:"I am hand."},
  {n:124, word:"Finger", phon:"/finger/", mean:"إصبع", cat:"body", ex:"I am finger."},
  {n:125, word:"Chest", phon:"/chest/", mean:"صدر", cat:"body", ex:"I am chest."},
  {n:126, word:"Stomach", phon:"/stomach/", mean:"معدة", cat:"body", ex:"I am stomach."},
  {n:127, word:"Back", phon:"/back/", mean:"ظهر", cat:"body", ex:"I am back."},
  {n:128, word:"Leg", phon:"/leg/", mean:"ساق", cat:"body", ex:"I am leg."},
  {n:129, word:"Knee", phon:"/knee/", mean:"ركبة", cat:"body", ex:"I am knee."},
  {n:130, word:"Foot", phon:"/foot/", mean:"قدم", cat:"body", ex:"I am foot."},
  {n:131, word:"Toe", phon:"/toe/", mean:"إصبع القدم", cat:"body", ex:"I am toe."},
  {n:132, word:"Heart", phon:"/heart/", mean:"قلب", cat:"body", ex:"I am heart."},
  {n:133, word:"Brain", phon:"/brain/", mean:"دماغ", cat:"body", ex:"I am brain."},
  {n:134, word:"Blood", phon:"/blood/", mean:"دم", cat:"body", ex:"I am blood."},
  {n:135, word:"Doctor", phon:"/doctor/", mean:"طبيب", cat:"job", ex:"I am doctor."},
  {n:136, word:"Nurse", phon:"/nurse/", mean:"ممرضة", cat:"job", ex:"I am nurse."},
  {n:137, word:"Teacher", phon:"/teacher/", mean:"معلم", cat:"job", ex:"I am teacher."},
  {n:138, word:"Student", phon:"/student/", mean:"طالب", cat:"job", ex:"I am student."},
  {n:139, word:"Engineer", phon:"/engineer/", mean:"مهندس", cat:"job", ex:"I am engineer."},
  {n:140, word:"Police officer", phon:"/police officer/", mean:"ضابط شرطة", cat:"job", ex:"I am police officer."},
  {n:141, word:"Firefighter", phon:"/firefighter/", mean:"رجل إطفاء", cat:"job", ex:"I am firefighter."},
  {n:142, word:"Pilot", phon:"/pilot/", mean:"طيار", cat:"job", ex:"I am pilot."},
  {n:143, word:"Driver", phon:"/driver/", mean:"سائق", cat:"job", ex:"I am driver."},
  {n:144, word:"Chef", phon:"/chef/", mean:"طاهي", cat:"job", ex:"I am chef."},
  {n:145, word:"Farmer", phon:"/farmer/", mean:"مزارع", cat:"job", ex:"I am farmer."},
  {n:146, word:"Artist", phon:"/artist/", mean:"فنان", cat:"job", ex:"I am artist."},
  {n:147, word:"Singer", phon:"/singer/", mean:"مغني", cat:"job", ex:"I am singer."},
  {n:148, word:"Actor", phon:"/actor/", mean:"ممثل", cat:"job", ex:"I am actor."},
  {n:149, word:"Writer", phon:"/writer/", mean:"كاتب", cat:"job", ex:"I am writer."},
  {n:150, word:"Programmer", phon:"/programmer/", mean:"مبرمج", cat:"job", ex:"I am programmer."},
  {n:151, word:"Scientist", phon:"/scientist/", mean:"عالم", cat:"job", ex:"I am scientist."},
  {n:152, word:"Astronaut", phon:"/astronaut/", mean:"رائد فضاء", cat:"job", ex:"I am astronaut."},
  {n:153, word:"Builder", phon:"/builder/", mean:"بناء", cat:"job", ex:"I am builder."},
  {n:154, word:"Dentist", phon:"/dentist/", mean:"طبيب أسنان", cat:"job", ex:"I am dentist."},
  {n:155, word:"Red", phon:"/red/", mean:"أحمر", cat:"color", ex:"I am red."},
  {n:156, word:"Blue", phon:"/blue/", mean:"أزرق", cat:"color", ex:"I am blue."},
  {n:157, word:"Green", phon:"/green/", mean:"أخضر", cat:"color", ex:"I am green."},
  {n:158, word:"Yellow", phon:"/yellow/", mean:"أصفر", cat:"color", ex:"I am yellow."},
  {n:159, word:"Orange", phon:"/orange/", mean:"برتقالي", cat:"color", ex:"I am orange."},
  {n:160, word:"Purple", phon:"/purple/", mean:"بنفسجي", cat:"color", ex:"I am purple."},
  {n:161, word:"Pink", phon:"/pink/", mean:"وردي", cat:"color", ex:"I am pink."},
  {n:162, word:"Brown", phon:"/brown/", mean:"بني", cat:"color", ex:"I am brown."},
  {n:163, word:"Black", phon:"/black/", mean:"أسود", cat:"color", ex:"I am black."},
  {n:164, word:"White", phon:"/white/", mean:"أبيض", cat:"color", ex:"I am white."},
  {n:165, word:"Gray", phon:"/gray/", mean:"رمادي", cat:"color", ex:"I am gray."},
  {n:166, word:"Silver", phon:"/silver/", mean:"فضي", cat:"color", ex:"I am silver."},
  {n:167, word:"Gold", phon:"/gold/", mean:"ذهبي", cat:"color", ex:"I am gold."},
  {n:168, word:"Navy", phon:"/navy/", mean:"كحلي", cat:"color", ex:"I am navy."},
  {n:169, word:"Maroon", phon:"/maroon/", mean:"عنابي", cat:"color", ex:"I am maroon."},
  {n:170, word:"Shirt", phon:"/shirt/", mean:"قميص", cat:"clothes", ex:"This is a shirt."},
  {n:171, word:"T-shirt", phon:"/t-shirt/", mean:"تي شيرت", cat:"clothes", ex:"This is a t-shirt."},
  {n:172, word:"Pants", phon:"/pants/", mean:"بنطال", cat:"clothes", ex:"This is a pants."},
  {n:173, word:"Jeans", phon:"/jeans/", mean:"جينز", cat:"clothes", ex:"This is a jeans."},
  {n:174, word:"Shorts", phon:"/shorts/", mean:"شورت", cat:"clothes", ex:"This is a shorts."},
  {n:175, word:"Dress", phon:"/dress/", mean:"فستان", cat:"clothes", ex:"This is a dress."},
  {n:176, word:"Skirt", phon:"/skirt/", mean:"تنورة", cat:"clothes", ex:"This is a skirt."},
  {n:177, word:"Jacket", phon:"/jacket/", mean:"سترة", cat:"clothes", ex:"This is a jacket."},
  {n:178, word:"Coat", phon:"/coat/", mean:"معطف", cat:"clothes", ex:"This is a coat."},
  {n:179, word:"Sweater", phon:"/sweater/", mean:"سترة صوفية", cat:"clothes", ex:"This is a sweater."},
  {n:180, word:"Suit", phon:"/suit/", mean:"بدلة", cat:"clothes", ex:"This is a suit."},
  {n:181, word:"Tie", phon:"/tie/", mean:"ربطة عنق", cat:"clothes", ex:"This is a tie."},
  {n:182, word:"Socks", phon:"/socks/", mean:"جوارب", cat:"clothes", ex:"This is a socks."},
  {n:183, word:"Shoes", phon:"/shoes/", mean:"حذاء", cat:"clothes", ex:"This is a shoes."},
  {n:184, word:"Sneakers", phon:"/sneakers/", mean:"حذاء رياضي", cat:"clothes", ex:"This is a sneakers."},
  {n:185, word:"Boots", phon:"/boots/", mean:"حذاء طويل", cat:"clothes", ex:"This is a boots."},
  {n:186, word:"Hat", phon:"/hat/", mean:"قبعة", cat:"clothes", ex:"This is a hat."},
  {n:187, word:"Cap", phon:"/cap/", mean:"قبعة رياضية", cat:"clothes", ex:"This is a cap."},
  {n:188, word:"Scarf", phon:"/scarf/", mean:"وشاح", cat:"clothes", ex:"This is a scarf."},
  {n:189, word:"Gloves", phon:"/gloves/", mean:"قفازات", cat:"clothes", ex:"This is a gloves."},
  {n:190, word:"Run", phon:"/run/", mean:"يركض", cat:"action", ex:"I am run."},
  {n:191, word:"Walk", phon:"/walk/", mean:"يمشي", cat:"action", ex:"I am walk."},
  {n:192, word:"Jump", phon:"/jump/", mean:"يقفز", cat:"action", ex:"I am jump."},
  {n:193, word:"Swim", phon:"/swim/", mean:"يسبح", cat:"action", ex:"I am swim."},
  {n:194, word:"Fly", phon:"/fly/", mean:"يطير", cat:"action", ex:"I am fly."},
  {n:195, word:"Drive", phon:"/drive/", mean:"يقود", cat:"action", ex:"I am drive."},
  {n:196, word:"Ride", phon:"/ride/", mean:"يركب", cat:"action", ex:"I am ride."},
  {n:197, word:"Play", phon:"/play/", mean:"يلعب", cat:"action", ex:"I am play."},
  {n:198, word:"Work", phon:"/work/", mean:"يعمل", cat:"action", ex:"I am work."},
  {n:199, word:"Study", phon:"/study/", mean:"يدرس", cat:"action", ex:"I am study."},
  {n:200, word:"Read", phon:"/read/", mean:"يقرأ", cat:"action", ex:"I am read."},
  {n:201, word:"Write", phon:"/write/", mean:"يكتب", cat:"action", ex:"I am write."},
  {n:202, word:"Listen", phon:"/listen/", mean:"يستمع", cat:"action", ex:"I am listen."},
  {n:203, word:"Speak", phon:"/speak/", mean:"يتحدث", cat:"action", ex:"I am speak."},
  {n:204, word:"Talk", phon:"/talk/", mean:"يتكلم", cat:"action", ex:"I am talk."},
  {n:205, word:"Say", phon:"/say/", mean:"يقول", cat:"action", ex:"I am say."},
  {n:206, word:"Eat", phon:"/eat/", mean:"يأكل", cat:"action", ex:"I am eat."},
  {n:207, word:"Drink", phon:"/drink/", mean:"يشرب", cat:"action", ex:"I am drink."},
  {n:208, word:"Cook", phon:"/cook/", mean:"يطبخ", cat:"action", ex:"I am cook."},
  {n:209, word:"Sleep", phon:"/sleep/", mean:"ينام", cat:"action", ex:"I am sleep."},
  {n:210, word:"Wake up", phon:"/wake up/", mean:"يستيقظ", cat:"action", ex:"I am wake up."},
  {n:211, word:"Wash", phon:"/wash/", mean:"يغسل", cat:"action", ex:"I am wash."},
  {n:212, word:"Clean", phon:"/clean/", mean:"ينظف", cat:"action", ex:"I am clean."},
  {n:213, word:"Brush", phon:"/brush/", mean:"يفرش", cat:"action", ex:"I am brush."},
  {n:214, word:"Buy", phon:"/buy/", mean:"يشتري", cat:"action", ex:"I am buy."},
  {n:215, word:"Sell", phon:"/sell/", mean:"يبيع", cat:"action", ex:"I am sell."},
  {n:216, word:"Pay", phon:"/pay/", mean:"يدفع", cat:"action", ex:"I am pay."},
  {n:217, word:"Open", phon:"/open/", mean:"يفتح", cat:"action", ex:"I am open."},
  {n:218, word:"Close", phon:"/close/", mean:"يغلق", cat:"action", ex:"I am close."},
  {n:219, word:"Smile", phon:"/smile/", mean:"يبتسم", cat:"action", ex:"I am smile."},
  {n:220, word:"Laugh", phon:"/laugh/", mean:"يضحك", cat:"action", ex:"I am laugh."},
  {n:221, word:"Cry", phon:"/cry/", mean:"يبكي", cat:"action", ex:"I am cry."},
  {n:222, word:"Think", phon:"/think/", mean:"يفكر", cat:"action", ex:"I am think."},
  {n:223, word:"Know", phon:"/know/", mean:"يعرف", cat:"action", ex:"I am know."},
  {n:224, word:"Understand", phon:"/understand/", mean:"يفهم", cat:"action", ex:"I am understand."},
  {n:225, word:"Remember", phon:"/remember/", mean:"يتذكر", cat:"action", ex:"I am remember."},
  {n:226, word:"Forget", phon:"/forget/", mean:"ينسى", cat:"action", ex:"I am forget."},
  {n:227, word:"Love", phon:"/love/", mean:"يحب", cat:"action", ex:"I am love."},
  {n:228, word:"Hate", phon:"/hate/", mean:"يكره", cat:"action", ex:"I am hate."},
  {n:229, word:"Help", phon:"/help/", mean:"يساعد", cat:"action", ex:"I am help."},
  {n:230, word:"Good", phon:"/good/", mean:"جيد", cat:"desc", ex:"I am good."},
  {n:231, word:"Bad", phon:"/bad/", mean:"سيء", cat:"desc", ex:"I am bad."},
  {n:232, word:"Big", phon:"/big/", mean:"كبير", cat:"desc", ex:"I am big."},
  {n:233, word:"Small", phon:"/small/", mean:"صغير", cat:"desc", ex:"I am small."},
  {n:234, word:"Tall", phon:"/tall/", mean:"طويل", cat:"desc", ex:"I am tall."},
  {n:235, word:"Short", phon:"/short/", mean:"قصير", cat:"desc", ex:"I am short."},
  {n:236, word:"Long", phon:"/long/", mean:"طويل (أفقياً)", cat:"desc", ex:"I am long."},
  {n:237, word:"Fat", phon:"/fat/", mean:"سمين", cat:"desc", ex:"I am fat."},
  {n:238, word:"Thin", phon:"/thin/", mean:"نحيف", cat:"desc", ex:"I am thin."},
  {n:239, word:"Heavy", phon:"/heavy/", mean:"ثقيل", cat:"desc", ex:"I am heavy."},
  {n:240, word:"Light", phon:"/light/", mean:"خفيف", cat:"desc", ex:"I am light."},
  {n:241, word:"Hot", phon:"/hot/", mean:"حار", cat:"desc", ex:"I am hot."},
  {n:242, word:"Cold", phon:"/cold/", mean:"بارد", cat:"desc", ex:"I am cold."},
  {n:243, word:"Warm", phon:"/warm/", mean:"دافئ", cat:"desc", ex:"I am warm."},
  {n:244, word:"Cool", phon:"/cool/", mean:"معتدل البرودة", cat:"desc", ex:"I am cool."},
  {n:245, word:"Fast", phon:"/fast/", mean:"سريع", cat:"desc", ex:"I am fast."},
  {n:246, word:"Slow", phon:"/slow/", mean:"بطيء", cat:"desc", ex:"I am slow."},
  {n:247, word:"New", phon:"/new/", mean:"جديد", cat:"desc", ex:"I am new."},
  {n:248, word:"Old", phon:"/old/", mean:"قديم", cat:"desc", ex:"I am old."},
  {n:249, word:"Young", phon:"/young/", mean:"شاب", cat:"desc", ex:"I am young."},
  {n:250, word:"Happy", phon:"/happy/", mean:"سعيد", cat:"desc", ex:"I am happy."},
  {n:251, word:"Sad", phon:"/sad/", mean:"حزين", cat:"desc", ex:"I am sad."},
  {n:252, word:"Angry", phon:"/angry/", mean:"غاضب", cat:"desc", ex:"I am angry."},
  {n:253, word:"Tired", phon:"/tired/", mean:"متعب", cat:"desc", ex:"I am tired."},
  {n:254, word:"Beautiful", phon:"/beautiful/", mean:"جميل", cat:"desc", ex:"I am beautiful."},
  {n:255, word:"Ugly", phon:"/ugly/", mean:"قبيح", cat:"desc", ex:"I am ugly."},
  {n:256, word:"Clean", phon:"/clean/", mean:"نظيف", cat:"desc", ex:"I am clean."},
  {n:257, word:"Dirty", phon:"/dirty/", mean:"متسخ", cat:"desc", ex:"I am dirty."},
  {n:258, word:"Rich", phon:"/rich/", mean:"غني", cat:"desc", ex:"I am rich."},
  {n:259, word:"Poor", phon:"/poor/", mean:"فقير", cat:"desc", ex:"I am poor."},
  {n:260, word:"House", phon:"/house/", mean:"منزل", cat:"place", ex:"I am house."},
  {n:261, word:"Home", phon:"/home/", mean:"بيت", cat:"place", ex:"I am home."},
  {n:262, word:"School", phon:"/school/", mean:"مدرسة", cat:"place", ex:"I am school."},
  {n:263, word:"University", phon:"/university/", mean:"جامعة", cat:"place", ex:"I am university."},
  {n:264, word:"Hospital", phon:"/hospital/", mean:"مستشفى", cat:"place", ex:"I am hospital."},
  {n:265, word:"Bank", phon:"/bank/", mean:"بنك", cat:"place", ex:"I am bank."},
  {n:266, word:"Park", phon:"/park/", mean:"حديقة", cat:"place", ex:"I am park."},
  {n:267, word:"Garden", phon:"/garden/", mean:"حديقة منزلية", cat:"place", ex:"I am garden."},
  {n:268, word:"Zoo", phon:"/zoo/", mean:"حديقة حيوان", cat:"place", ex:"I am zoo."},
  {n:269, word:"Museum", phon:"/museum/", mean:"متحف", cat:"place", ex:"I am museum."},
  {n:270, word:"Library", phon:"/library/", mean:"مكتبة", cat:"place", ex:"I am library."},
  {n:271, word:"Restaurant", phon:"/restaurant/", mean:"مطعم", cat:"place", ex:"I am restaurant."},
  {n:272, word:"Cafe", phon:"/cafe/", mean:"مقهى", cat:"place", ex:"I am cafe."},
  {n:273, word:"Supermarket", phon:"/supermarket/", mean:"سوبر ماركت", cat:"place", ex:"I am supermarket."},
  {n:274, word:"Mall", phon:"/mall/", mean:"مركز تسوق", cat:"place", ex:"I am mall."},
  {n:275, word:"Airport", phon:"/airport/", mean:"مطار", cat:"place", ex:"I am airport."},
  {n:276, word:"Station", phon:"/station/", mean:"محطة", cat:"place", ex:"I am station."},
  {n:277, word:"Street", phon:"/street/", mean:"شارع", cat:"place", ex:"I am street."},
  {n:278, word:"City", phon:"/city/", mean:"مدينة", cat:"place", ex:"I am city."},
  {n:279, word:"Village", phon:"/village/", mean:"قرية", cat:"place", ex:"I am village."},
  {n:280, word:"Book", phon:"/book/", mean:"كتاب", cat:"item", ex:"This is a book."},
  {n:281, word:"Pen", phon:"/pen/", mean:"قلم حبر", cat:"item", ex:"This is a pen."},
  {n:282, word:"Pencil", phon:"/pencil/", mean:"قلم رصاص", cat:"item", ex:"This is a pencil."},
  {n:283, word:"Paper", phon:"/paper/", mean:"ورقة", cat:"item", ex:"This is a paper."},
  {n:284, word:"Computer", phon:"/computer/", mean:"حاسوب", cat:"item", ex:"This is a computer."},
  {n:285, word:"Phone", phon:"/phone/", mean:"هاتف", cat:"item", ex:"This is a phone."},
  {n:286, word:"Television", phon:"/television/", mean:"تلفاز", cat:"item", ex:"This is a television."},
  {n:287, word:"Radio", phon:"/radio/", mean:"مذياع", cat:"item", ex:"This is a radio."},
  {n:288, word:"Clock", phon:"/clock/", mean:"ساعة حائط", cat:"item", ex:"This is a clock."},
  {n:289, word:"Watch", phon:"/watch/", mean:"ساعة يد", cat:"item", ex:"This is a watch."},
  {n:290, word:"Bag", phon:"/bag/", mean:"حقيبة", cat:"item", ex:"This is a bag."},
  {n:291, word:"Box", phon:"/box/", mean:"صندوق", cat:"item", ex:"This is a box."},
  {n:292, word:"Key", phon:"/key/", mean:"مفتاح", cat:"item", ex:"This is a key."},
  {n:293, word:"Money", phon:"/money/", mean:"نقود", cat:"item", ex:"This is a money."},
  {n:294, word:"Picture", phon:"/picture/", mean:"صورة", cat:"item", ex:"This is a picture."},
  {n:295, word:"Camera", phon:"/camera/", mean:"كاميرا", cat:"item", ex:"This is a camera."},
  {n:296, word:"Table", phon:"/table/", mean:"طاولة", cat:"item", ex:"This is a table."},
  {n:297, word:"Chair", phon:"/chair/", mean:"كرسي", cat:"item", ex:"This is a chair."},
  {n:298, word:"Bed", phon:"/bed/", mean:"سرير", cat:"item", ex:"This is a bed."},
  {n:299, word:"Door", phon:"/door/", mean:"باب", cat:"item", ex:"This is a door."},
];

const kidsQuizData = [
  {q:"ما هذا؟", img:"💧", options:["Play","Water","Coat","Fern"], a:1},
  {q:"ما هذا؟", img:"💬", options:["Wake up","Talk","Fern","Street"], a:1},
  {q:"أكمل الحرف الناقص: Lio_", img:"🦁", options:["n","h","b","w"], a:0},
  {q:"ما هذا؟", img:"📚", options:["Cafe","Fox","Navy","Study"], a:3},
  {q:"ما هذا؟", img:"🏞️", options:["Boots","Say","Park","Jacket"], a:2},
  {q:"ما هذا؟", img:"📱", options:["Phone","Nurse","Stomach","Clock"], a:0},
  {q:"ما هذا؟", img:"🧃", options:["Juice","Fish","Cucumber","Fly"], a:0},
  {q:"ما هذا؟", img:"🛍️", options:["Nose","Back","Mall","Chair"], a:2},
  {q:"ما هذا؟", img:"😊", options:["Happy","Listen","Village","Tall"], a:0},
  {q:"ما هذا؟", img:"🌱", options:["Corn","Root","Leg","Paper"], a:1},
  {q:"أكمل الحرف الناقص: E_r", img:"👂", options:["a","k","s","Z"], a:0},
  {q:"ما هذا؟", img:"✨", options:["Tie","Village","Cry","New"], a:3},
  {q:"ما هذا؟", img:"👱", options:["Coffee","Ice cream","Face","Work"], a:2},
  {q:"ما هذا؟", img:"👨‍🎨", options:["Pay","Artist","Heart","Cherry"], a:1},
  {q:"أكمل الحرف الناقص: C_est", img:"👕", options:["r","h","o","R"], a:1},
  {q:"ما معنى كلمة Ice cream؟", img:"🍦", options:["رأس","مدينة","يفهم","مثلجات"], a:3},
  {q:"ما هذا؟", img:"🍓", options:["Walk","Strawberry","Swan","Bank"], a:1},
  {q:"ما هذا؟", img:"💻", options:["Eagle","Programmer","Cafe","Maroon"], a:1},
  {q:"ما هذا؟", img:"🍒", options:["Tulip","Hedgehog","Cherry","Key"], a:2},
  {q:"ما هذا؟", img:"🥚", options:["Drive","Fly","Egg","Hedgehog"], a:2},
  {q:"ما معنى كلمة University؟", img:"🎓", options:["يكتب","جامعة","يبكي","حديقة حيوان"], a:1},
  {q:"ما هذا؟", img:"🦥", options:["New","Sloth","Hand","Fish"], a:1},
  {q:"ما معنى كلمة Camera؟", img:"📷", options:["حذاء رياضي","كاميرا","وشاح","يتذكر"], a:1},
  {q:"ما هذا؟", img:"🗯️", options:["Fern","Say","Cry","Engineer"], a:1},
  {q:"ما هذا؟", img:"🪙", options:["Smile","Scarf","Branch","Poor"], a:3},
  {q:"ما معنى كلمة Cool؟", img:"😎", options:["بنفسجي","قميص","أزرق","معتدل البرودة"], a:3},
  {q:"ما هذا؟", img:"🍅", options:["Leopard","Restaurant","Tomato","Arm"], a:2},
  {q:"ما هذا؟", img:"💻", options:["Sad","Television","Zebra","Computer"], a:3},
  {q:"أكمل الحرف الناقص: B_nk", img:"🏦", options:["h","a","B","p"], a:1},
  {q:"ما معنى كلمة Paper؟", img:"📄", options:["ينظف","يشتري","ورقة","عصير"], a:2},
  {q:"ما هذا؟", img:"✈️", options:["Cheetah","Airport","Pigeon","Hair"], a:1},
  {q:"أكمل الحرف الناقص: E_g", img:"🥚", options:["D","g","n","j"], a:1},
  {q:"ما معنى كلمة Fast؟", img:"🐆", options:["أسود","عباد الشمس","سريع","أخضر"], a:2},
  {q:"ما هذا؟", img:"🔘", options:["Gray","Flamingo","House","Talk"], a:0},
  {q:"ما هذا؟", img:"🐴", options:["Koala","Happy","Computer","Horse"], a:3},
  {q:"ما معنى كلمة Garden؟", img:"🏡", options:["يضحك","كنغر","حديقة منزلية","شجرة النخيل"], a:2},
  {q:"ما هذا؟", img:"🚗", options:["Watch","Swim","Ear","Drive"], a:3},
  {q:"أكمل الحرف الناقص: _iger", img:"🐅", options:["a","J","T","C"], a:2},
  {q:"أكمل الحرف الناقص: _angaroo", img:"🦘", options:["I","n","K","b"], a:2},
  {q:"ما هذا؟", img:"🟢", options:["Green","Tongue","Scientist","Clean"], a:0},
  {q:"ما معنى كلمة Root؟", img:"🌱", options:["جذر","تلفاز","ينظف","أزرق"], a:0},
  {q:"ما هذا؟", img:"🕰️", options:["Deer","Finger","Lion","Clock"], a:3},
  {q:"ما هذا؟", img:"🚕", options:["Driver","Cow","Vine","Village"], a:0},
  {q:"ما هذا؟", img:"🥛", options:["Milk","Cake","Goose","Zoo"], a:0},
  {q:"ما معنى كلمة Driver؟", img:"🚕", options:["سائق","يضحك","يطير","أصفر"], a:0},
  {q:"ما هذا؟", img:"📻", options:["Face","Student","Radio","White"], a:2},
  {q:"ما هذا؟", img:"🍅", options:["Salt","Swan","Cucumber","Tomato"], a:3},
  {q:"ما هذا؟", img:"🧼", options:["Wash","Speak","Zoo","Chef"], a:0},
  {q:"أكمل الحرف الناقص: Elephan_", img:"🐘", options:["i","c","t","f"], a:2},
  {q:"أكمل الحرف الناقص: Sc_rf", img:"🧣", options:["I","M","a","L"], a:2},
  {q:"ما معنى كلمة Tongue؟", img:"👅", options:["كتف","لسان","وشاح","سيء"], a:1},
  {q:"ما هذا؟", img:"🐔", options:["Door","Ride","Shirt","Chicken"], a:3},
  {q:"ما معنى كلمة Maroon؟", img:"🍷", options:["عنابي","نورس","دم","شجيرة"], a:0},
  {q:"أكمل الحرف الناقص: Mush_oom", img:"🍄", options:["r","u","m","x"], a:0},
  {q:"ما هذا؟", img:"💵", options:["Sheep","Money","Giraffe","Bamboo"], a:1},
  {q:"ما معنى كلمة Duck؟", img:"🦆", options:["شعر","بطة","زنبق","نسر"], a:1},
  {q:"أكمل الحرف الناقص: _anda", img:"🐼", options:["z","P","g","H"], a:1},
  {q:"ما هذا؟", img:"🦾", options:["Elbow","Gloves","Tiger","Koala"], a:0},
  {q:"ما هذا؟", img:"🐼", options:["Panda","Penguin","Key","Potato"], a:0},
  {q:"ما هذا؟", img:"🗣️", options:["Cheese","Speak","Key","Elephant"], a:1},
  {q:"ما هذا؟", img:"🦢", options:["Swan","Restaurant","Tea","Listen"], a:0},
  {q:"ما هذا؟", img:"🦁", options:["Cafe","Supermarket","Zoo","Tulip"], a:2},
  {q:"أكمل الحرف الناقص: _omato", img:"🍅", options:["J","q","d","T"], a:3},
  {q:"ما هذا؟", img:"😢", options:["Rose","Sad","Kangaroo","Silver"], a:1},
  {q:"ما هذا؟", img:"👖", options:["Write","Paper","Pants","Ugly"], a:2},
  {q:"ما هذا؟", img:"☕", options:["Warm","Pay","Close","Scarf"], a:0},
  {q:"ما هذا؟", img:"🍃", options:["Leaf","Television","Bad","Grass"], a:0},
  {q:"ما هذا؟", img:"🛍️", options:["Moss","Hate","Mall","Tall"], a:2},
  {q:"ما هذا؟", img:"🌴", options:["Pants","Palm tree","Remember","Pepper"], a:1},
  {q:"ما معنى كلمة Meat؟", img:"🥩", options:["سريع","يدفع","يفهم","لحم"], a:3},
  {q:"أكمل الحرف الناقص: _nee", img:"🧎", options:["E","t","K","R"], a:2},
  {q:"ما هذا؟", img:"🦅", options:["Hawk","Remember","Camel","Dirty"], a:0},
  {q:"ما هذا؟", img:"📺", options:["Boots","Television","Hat","Book"], a:1},
  {q:"ما معنى كلمة Tomato؟", img:"🍅", options:["يتحدث","مثلجات","يفكر","طماطم"], a:3},
  {q:"ما هذا؟", img:"📏", options:["Table","Listen","Mouse","Short"], a:3},
  {q:"ما هذا؟", img:"🪷", options:["Gloves","Angry","Lily","Rabbit"], a:2},
  {q:"ما هذا؟", img:"🎮", options:["Giraffe","Onion","Play","Listen"], a:2},
  {q:"ما معنى كلمة Giraffe؟", img:"🦒", options:["سعيد","يأكل","سن","زرافة"], a:3},
  {q:"ما هذا؟", img:"🍒", options:["Paper","Engineer","Rich","Cherry"], a:3},
  {q:"ما هذا؟", img:"🍋", options:["Giraffe","Station","Lemon","Moss"], a:2},
  {q:"أكمل الحرف الناقص: Woodp_cker", img:"🐦", options:["R","M","s","e"], a:3},
  {q:"ما هذا؟", img:"🩸", options:["Navy","Tiger","Salt","Blood"], a:3},
  {q:"أكمل الحرف الناقص: Appl_", img:"🍎", options:["e","W","V","M"], a:0},
  {q:"ما هذا؟", img:"👂", options:["Black","Ear","Pink","Phone"], a:1},
  {q:"ما هذا؟", img:"🌻", options:["Lion","Sunflower","Sad","Fast"], a:1},
  {q:"ما هذا؟", img:"👩‍⚕️", options:["Home","Socks","Nurse","Hate"], a:2},
  {q:"أكمل الحرف الناقص: Stude_t", img:"👨‍🎓", options:["r","X","a","n"], a:3},
  {q:"ما معنى كلمة Juice؟", img:"🧃", options:["جبن","يقول","إصبع","عصير"], a:3},
  {q:"ما هذا؟", img:"🩸", options:["Swan","Blood","Firefighter","Rabbit"], a:1},
  {q:"ما هذا؟", img:"🔓", options:["Sloth","Nurse","Open","Builder"], a:2},
  {q:"ما هذا؟", img:"👢", options:["Boots","Silver","Tulip","Crow"], a:0},
  {q:"ما هذا؟", img:"🟠", options:["Radio","Clean","Orange","Actor"], a:2},
  {q:"ما هذا؟", img:"👨‍🍳", options:["Meat","Chef","Artist","Tall"], a:1},
  {q:"ما هذا؟", img:"☕", options:["Cookie","Coffee","Green","Cafe"], a:3},
  {q:"ما هذا؟", img:"🍽️", options:["Restaurant","City","Apple","Fly"], a:0},
  {q:"ما هذا؟", img:"🌹", options:["Rose","Cookie","Seed","Television"], a:0},
  {q:"ما هذا؟", img:"🍚", options:["Teacher","Rice","Owl","Clock"], a:1},
  {q:"أكمل الحرف الناقص: Ro_e", img:"🌹", options:["b","s","K","N"], a:1},
  {q:"ما هذا؟", img:"🍌", options:["Banana","Heavy","Woodpecker","Shoulder"], a:0},
  {q:"ما هذا؟", img:"🍍", options:["Love","Sweater","Garlic","Pineapple"], a:3},
];

const storiesData = [
  {
    "id": 1,
    "title": "في المطعم (At the Restaurant)",
    "img": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400",
    "desc": "محادثة لطلب الطعام في مطعم فاخر.",
    "dialogue": [
      {
        "en": "Waiter: Good evening! Welcome to our restaurant.",
        "ar": "النادل: مساء الخير! أهلاً بكم في مطعمنا."
      },
      {
        "en": "Customer: Good evening. A table for two, please.",
        "ar": "الزبون: مساء الخير. طاولة لشخصين، من فضلك."
      },
      {
        "en": "Waiter: Certainly. Follow me, please. Here is the menu.",
        "ar": "النادل: بالتأكيد. تفضلوا باللحاق بي. ها هي قائمة الطعام."
      },
      {
        "en": "Customer: Thank you. What do you recommend today?",
        "ar": "الزبون: شكراً لك. بماذا تنصحنا اليوم؟"
      },
      {
        "en": "Waiter: Our special today is the grilled salmon.",
        "ar": "النادل: طبقنا الخاص اليوم هو السلمون المشوي."
      },
      {
        "en": "Customer: That sounds great. I will have that, please.",
        "ar": "الزبون: يبدو هذا رائعاً. سآخذ ذلك، من فضلك."
      },
      {
        "en": "Waiter: Would you like anything to drink?",
        "ar": "النادل: هل تودون شرب أي شيء؟"
      },
      {
        "en": "Customer: Just some fresh orange juice, thank you.",
        "ar": "الزبون: فقط بعض عصير البرتقال الطازج، شكراً لك."
      }
    ]
  },
  {
    "id": 2,
    "title": "في المطار (At the Airport)",
    "img": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400",
    "desc": "إجراءات السفر والتحدث مع موظف الاستقبال.",
    "dialogue": [
      {
        "en": "Agent: Good morning. Can I see your passport and ticket?",
        "ar": "الموظف: صباح الخير. هل يمكنني رؤية جواز سفرك وتذكرتك؟"
      },
      {
        "en": "Traveler: Good morning. Yes, here they are.",
        "ar": "المسافر: صباح الخير. نعم، تفضل."
      },
      {
        "en": "Agent: Thank you. How many bags are you checking in?",
        "ar": "الموظف: شكراً لك. كم حقيبة ستقوم بشحنها؟"
      },
      {
        "en": "Traveler: Just this one large suitcase.",
        "ar": "المسافر: فقط هذه الحقيبة الكبيرة."
      },
      {
        "en": "Agent: Do you prefer a window or an aisle seat?",
        "ar": "الموظف: هل تفضل مقعداً بجوار النافذة أم بجوار الممر؟"
      },
      {
        "en": "Traveler: A window seat, please.",
        "ar": "المسافر: مقعداً بجوار النافذة، من فضلك."
      },
      {
        "en": "Agent: Alright. Here is your boarding pass. Have a nice flight!",
        "ar": "الموظف: حسناً. ها هي بطاقة الصعود للطائرة. رحلة سعيدة!"
      },
      {
        "en": "Traveler: Thank you very much.",
        "ar": "المسافر: شكراً جزيلاً لك."
      }
    ]
  },
  {
    "id": 3,
    "title": "لقاء صديق (Meeting a Friend)",
    "img": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400",
    "desc": "مقابلة صديق قديم في الشارع.",
    "dialogue": [
      {
        "en": "Ahmed: Hey Khalid! Long time no see!",
        "ar": "أحمد: أهلاً خالد! لم نلتقِ منذ زمن طويل!"
      },
      {
        "en": "Khalid: Ahmed? Is that you? Wow, how are you?",
        "ar": "خالد: أحمد؟ هل هذا أنت؟ واو، كيف حالك؟"
      },
      {
        "en": "Ahmed: I am doing great! How about you? What are you doing here?",
        "ar": "أحمد: أنا بخير جداً! ماذا عنك؟ ماذا تفعل هنا؟"
      },
      {
        "en": "Khalid: I am just shopping for some clothes. Do you have time for coffee?",
        "ar": "خالد: أنا فقط أتسوق لبعض الملابس. هل لديك وقت لشرب القهوة؟"
      },
      {
        "en": "Ahmed: I would love to, but I have a meeting in 10 minutes.",
        "ar": "أحمد: أود ذلك، ولكن لدي اجتماع بعد 10 دقائق."
      },
      {
        "en": "Khalid: No problem. Let us meet tomorrow then.",
        "ar": "خالد: لا مشكلة. لنلتقِ غداً إذاً."
      },
      {
        "en": "Ahmed: Great idea! Give me your phone number.",
        "ar": "أحمد: فكرة رائعة! أعطني رقم هاتفك."
      },
      {
        "en": "Khalid: Sure, it is 0123456789. See you tomorrow!",
        "ar": "خالد: بالتأكيد، الرقم هو 0123456789. أراك غداً!"
      }
    ]
  },
  {
    "id": 4,
    "title": "في عيادة الطبيب (At the Doctor)",
    "img": "https://images.unsplash.com/photo-1505751172107-16d7249a531b?w=400",
    "desc": "وصف الأعراض والحصول على نصيحة طبية.",
    "dialogue": [
      {
        "en": "Doctor: Good morning. What seems to be the problem?",
        "ar": "الطبيب: صباح الخير. ما هي المشكلة؟"
      },
      {
        "en": "Patient: Good morning, doctor. I have a terrible headache and a sore throat.",
        "ar": "المريض: صباح الخير يا دكتور. لدي صداع رهيب وألم في الحلق."
      },
      {
        "en": "Doctor: Do you have a fever?",
        "ar": "الطبيب: هل لديك حمى (ارتفاع في الحرارة)؟"
      },
      {
        "en": "Patient: Yes, I feel very hot since last night.",
        "ar": "المريض: نعم، أشعر بحرارة شديدة منذ ليلة أمس."
      },
      {
        "en": "Doctor: Open your mouth and say \"Ah\", please.",
        "ar": "الطبيب: افتح فمك وقل \"آه\"، من فضلك."
      },
      {
        "en": "Patient: Ahhhhh.",
        "ar": "المريض: آآآآآه."
      },
      {
        "en": "Doctor: You have a bad cold. You need to rest and drink plenty of fluids.",
        "ar": "الطبيب: لديك زكام شديد. تحتاج للراحة وشرب الكثير من السوائل."
      },
      {
        "en": "Patient: Should I take any medicine?",
        "ar": "المريض: هل يجب أن آخذ أي دواء؟"
      },
      {
        "en": "Doctor: Yes, I will write a prescription for you. Take this twice a day.",
        "ar": "الطبيب: نعم، سأكتب لك وصفة طبية. خذ هذا مرتين في اليوم."
      }
    ]
  },
  {
    "id": 5,
    "title": "عن الهوايات (About Hobbies)",
    "img": "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400",
    "desc": "التحدث عما تحب فعله في وقت الفراغ.",
    "dialogue": [
      {
        "en": "Sara: What do you like to do in your free time, Ali?",
        "ar": "سارة: ماذا تحب أن تفعل في وقت فراغك يا علي؟"
      },
      {
        "en": "Ali: I really enjoy photography. I love taking pictures of nature.",
        "ar": "علي: أنا حقاً أستمتع بالتصوير الفوتوغرافي. أحب التقاط صور للطبيعة."
      },
      {
        "en": "Sara: That is interesting! I prefer reading novels.",
        "ar": "سارة: هذا ممتع! أنا أفضل قراءة الروايات."
      },
      {
        "en": "Ali: Who is your favorite author?",
        "ar": "علي: من هو كاتبك المفضل؟"
      },
      {
        "en": "Sara: I love Agatha Christie. Her mystery stories are amazing.",
        "ar": "سارة: أحب أجاثا كريستي. قصصها الغامضة مذهلة."
      },
      {
        "en": "Ali: I have heard about her. Maybe I should read one of her books.",
        "ar": "علي: لقد سمعت عنها. ربا يجب أن أقرأ أحد كتبها."
      },
      {
        "en": "Sara: You should! I can lend you one if you want.",
        "ar": "سارة: يجب عليك ذلك! يمكنني إعارتك واحداً إذا أردت."
      },
      {
        "en": "Ali: That would be great, thank you!",
        "ar": "علي: سيكون ذلك رائعاً، شكراً لك!"
      }
    ]
  },
  {
    "id": 6,
    "title": "في الفندق (At the Hotel)",
    "img": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
    "desc": "حجز غرفة والاستفسار عن الخدمات.",
    "dialogue": [
      {
        "en": "Receptionist: Welcome to Green Valley Hotel. How can I help you?",
        "ar": "موظف الاستقبال: أهلاً بكم في فندق الوادي الأخضر. كيف يمكنني مساعدتكم؟"
      },
      {
        "en": "Guest: Hello. I would like to book a single room for two nights.",
        "ar": "الضيف: مرحباً. أود حجز غرفة مفردة لليلتين."
      },
      {
        "en": "Receptionist: Let me check... Yes, we have one available. That will be $100.",
        "ar": "موظف الاستقبال: دعني أتحقق... نعم، لدينا واحدة متاحة. السعر 100 دولار."
      },
      {
        "en": "Guest: Does that include breakfast?",
        "ar": "الضيف: هل يشمل ذلك وجبة الإفطار؟"
      },
      {
        "en": "Receptionist: Yes, breakfast is served from 7 to 10 AM in the dining hall.",
        "ar": "موظف الاستقبال: نعم، يتم تقديم الإفطار من الساعة 7 إلى 10 صباحاً في قاعة الطعام."
      },
      {
        "en": "Guest: Great. Is there free Wi-Fi in the room?",
        "ar": "الضيف: رائع. هل يوجد واي فاي مجاني في الغرفة؟"
      },
      {
        "en": "Receptionist: Yes, here is the password. Enjoy your stay!",
        "ar": "موظف الاستقبال: نعم، تفضل كلمة السر. استمتع بإقامتك!"
      }
    ]
  },
  {
    "id": 7,
    "title": "طلب المساعدة (Asking for Help)",
    "img": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400",
    "desc": "السؤال عن الاتجاهات في مدينة غريبة.",
    "dialogue": [
      {
        "en": "Tourist: Excuse me, could you help me, please?",
        "ar": "السائح: معذرة، هل يمكنك مساعدتي من فضلك؟"
      },
      {
        "en": "Passerby: Sure! What do you need?",
        "ar": "المار: بالتأكيد! ماذا تحتاج؟"
      },
      {
        "en": "Tourist: I am looking for the city library. Am I on the right way?",
        "ar": "السائح: أنا أبحث عن مكتبة المدينة. هل أنا في الطريق الصحيح؟"
      },
      {
        "en": "Passerby: Not really. You need to turn left at the next traffic light.",
        "ar": "المار: ليس تماماً. يجب أن تنعطف يساراً عند إشارة المرور القادمة."
      },
      {
        "en": "Tourist: Is it far from here?",
        "ar": "السائح: هل هي بعيدة من هنا؟"
      },
      {
        "en": "Passerby: No, it is only a five-minute walk.",
        "ar": "المار: لا، إنها تبعد مسيرة خمس دقائق فقط سيراً على الأقدام."
      },
      {
        "en": "Tourist: Thank you so much for your help.",
        "ar": "السائح: شكراً جزيلاً لك على مساعدتك."
      },
      {
        "en": "Passerby: You are welcome! Have a nice day.",
        "ar": "المار: على الرحب والسعة! طاب يومك."
      }
    ]
  },
  {
    "id": 8,
    "title": "مقابلة عمل (Job Interview)",
    "img": "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400",
    "desc": "محادثة بين مدير ومتقدم لوظيفة.",
    "dialogue": [
      {
        "en": "Manager: Tell me about yourself, please.",
        "ar": "المدير: أخبرني عن نفسك، من فضلك."
      },
      {
        "en": "Applicant: I graduated last year with a degree in Computer Science.",
        "ar": "المتقدم: تخرجت العام الماضي بشهادة في علوم الحاسوب."
      },
      {
        "en": "Manager: Why do you want to work for our company?",
        "ar": "المدير: لماذا تريد العمل في شركتنا؟"
      },
      {
        "en": "Applicant: Your company is known for innovation, and I want to be part of it.",
        "ar": "المتقدم: شركتكم معروفة بالابتكار، وأريد أن أكون جزءاً من ذلك."
      },
      {
        "en": "Manager: What are your strengths?",
        "ar": "المدير: ما هي نقاط قوتك؟"
      },
      {
        "en": "Applicant: I am a hard worker and a fast learner.",
        "ar": "المتقدم: أنا مجتهد وسريع التعلم."
      },
      {
        "en": "Manager: Great. We will contact you soon.",
        "ar": "المدير: رائع. سنتصل بك قريباً."
      }
    ]
  },
  {
    "id": 9,
    "title": "التحدث عن العائلة (Talking about Family)",
    "img": "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400",
    "desc": "وصف أفراد العائلة والأقارب.",
    "dialogue": [
      {
        "en": "Mona: Do you have a big family, Layla?",
        "ar": "منى: هل لديك عائلة كبيرة يا ليلى؟"
      },
      {
        "en": "Layla: No, I have a small family. Just my parents and one brother.",
        "ar": "ليلى: لا، لدي عائلة صغيرة. فقط والديّ وأخ واحد."
      },
      {
        "en": "Mona: How old is your brother?",
        "ar": "منى: كم عمر أخيكِ؟"
      },
      {
        "en": "Layla: He is ten years old. He is in primary school.",
        "ar": "ليلى: عمره عشر سنوات. هو في المدرسة الابتدائية."
      },
      {
        "en": "Mona: And what about your grandparents?",
        "ar": "منى: وماذا عن أجدادكِ؟"
      },
      {
        "en": "Layla: They live in a small village. We visit them every summer.",
        "ar": "ليلى: هم يعيشون في قرية صغيرة. نحن نزورهم كل صيف."
      },
      {
        "en": "Mona: That is lovely. I miss my grandparents too.",
        "ar": "منى: هذا جميل. أنا أشتاق لأجدادي أيضاً."
      }
    ]
  },
  {
    "id": 10,
    "title": "خطط العطلة (Holiday Plans)",
    "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400",
    "desc": "محادثة عن السفر في الإجازة الصيفية.",
    "dialogue": [
      {
        "en": "Omar: Where are you going for the summer holiday?",
        "ar": "عمر: إلى أين ستذهب في عطلة الصيف؟"
      },
      {
        "en": "Zaid: I am planning to visit Egypt. I want to see the Pyramids.",
        "ar": "زيد: أنا أخطط لزيارة مصر. أريد رؤية الأهرامات."
      },
      {
        "en": "Omar: That sounds exciting! How long will you stay there?",
        "ar": "عمر: يبدو هذا مثيراً! كم ستبقى هناك؟"
      },
      {
        "en": "Zaid: I will stay for two weeks with my family.",
        "ar": "زيد: سأبقى لمدة أسبوعين مع عائلتي."
      },
      {
        "en": "Omar: Have you booked your flight yet?",
        "ar": "عمر: هل حجزت رحلتك بعد؟"
      },
      {
        "en": "Zaid: Yes, I booked it yesterday. I am very happy.",
        "ar": "زيد: نعم، حجزتها بالأمس. أنا سعيد جداً."
      },
      {
        "en": "Omar: I hope you have a wonderful time!",
        "ar": "عمر: أتمنى لك وقتاً رائعاً!"
      }
    ]
  }
]



const quizData = [
  // Easy
  { q: "I ___ a student.", options: ["am", "is", "are", "be"], a: 0, lvl: "سهل" },
  { q: "He ___ an apple every day.", options: ["eating", "eat", "eats", "ate"], a: 2, lvl: "سهل" },
  { q: "The word for 'تفاحة' is:", options: ["Orange", "Banana", "Apple", "Grape"], a: 2, lvl: "سهل" },
  { q: "Which one is a color?", options: ["Dog", "Red", "Car", "Book"], a: 1, lvl: "سهل" },
  { q: "They ___ playing football now.", options: ["is", "am", "be", "are"], a: 3, lvl: "سهل" },
  { q: "___ is your name?", options: ["How", "Who", "What", "Where"], a: 2, lvl: "سهل" },
  { q: "I see a ___ in the sky. (طائر)", options: ["cat", "bird", "fish", "dog"], a: 1, lvl: "سهل" },
  { q: "Opposite of 'Hot' is:", options: ["Cold", "Warm", "Big", "Small"], a: 0, lvl: "سهل" },
  { q: "She ___ not like coffee.", options: ["do", "does", "is", "are"], a: 1, lvl: "سهل" },
  { q: "10 + 5 = ___", options: ["Twelve", "Fifteen", "Twenty", "Ten"], a: 1, lvl: "سهل" },

  // Medium
  { q: "Yesterday, I ___ to the market.", options: ["go", "gone", "went", "going"], a: 2, lvl: "متوسط" },
  { q: "Look! The baby ___.", options: ["sleeping", "sleeps", "is sleeping", "slept"], a: 2, lvl: "متوسط" },
  { q: "___ you ever been to London?", options: ["Has", "Have", "Did", "Do"], a: 1, lvl: "متوسط" },
  { q: "A person who teaches is a ___.", options: ["Doctor", "Teacher", "Engineer", "Driver"], a: 1, lvl: "متوسط" },
  { q: "This car is ___ than that one.", options: ["fast", "fastest", "faster", "more fast"], a: 2, lvl: "متوسط" },
  { q: "I will call you ___ I arrive.", options: ["when", "who", "which", "where"], a: 0, lvl: "متوسط" },
  { q: "He is interested ___ history.", options: ["on", "at", "in", "with"], a: 2, lvl: "متوسط" },
  { q: "I don't have ___ money left.", options: ["some", "many", "any", "few"], a: 2, lvl: "متوسط" },
  { q: "If it rains, we ___ at home.", options: ["stayed", "would stay", "will stay", "staying"], a: 2, lvl: "متوسط" },
  { q: "My father's brother is my ___.", options: ["uncle", "aunt", "cousin", "nephew"], a: 0, lvl: "متوسط" },

  // Hard
  { q: "By this time next year, I ___ my degree.", options: ["will finish", "will have finished", "finished", "finishing"], a: 1, lvl: "صعب" },
  { q: "The book ___ by a famous author in 1990.", options: ["wrote", "has written", "was written", "writes"], a: 2, lvl: "صعب" },
  { q: "___ had I arrived than it started pouring.", options: ["No sooner", "Hardly", "Scarcely", "As soon as"], a: 0, lvl: "صعب" },
  { q: "She accused him ___ stealing her purse.", options: ["for", "of", "on", "with"], a: 1, lvl: "صعب" },
  { q: "Despite ___ tired, he kept working.", options: ["be", "was", "being", "been"], a: 2, lvl: "صعب" },
  { q: "If I ___ you, I wouldn't do that.", options: ["am", "was", "were", "been"], a: 2, lvl: "صعب" },
  { q: "Not only ___ late, but he also forgot the documents.", options: ["he was", "was he", "did he", "he did"], a: 1, lvl: "صعب" },
  { q: "The synonym of 'Fascinating' is:", options: ["Boring", "Terrifying", "Interesting", "Depressing"], a: 2, lvl: "صعب" },
  { q: "It's high time we ___.", options: ["leave", "leaving", "left", "have left"], a: 2, lvl: "صعب" },
  { q: "She insisted ___ paying the bill.", options: ["in", "on", "to", "for"], a: 1, lvl: "صعب" }
];

// ============ STATE ============
const learned = new Set();
let currentVocabPage = 1;
const VOCAB_PER_PAGE = 15;
let filteredVocab = [...vocabData];
let sentenceFilter = 'all';
let grammarFilter = 'all';
let alphaFilter = 'all';

let currentQIdx = 0;
let quizScore = 0;
let quizActive = false;

// ============ INIT ============
function init() {
  console.log('Initializing Efromha Platform...');
  try { if(document.getElementById('particles')) createParticles(); } catch(e) { console.error('Particles failed:', e); }
  try { if(document.getElementById('quickLetters')) buildQuickLetters(); } catch(e) { console.error('QuickLetters failed:', e); }
  try { buildAlphabet(); } catch(e) { console.error('Alphabet failed:', e); }
  try { buildGrammar(); } catch(e) { console.error('Grammar failed:', e); }
  try { buildVocab(); } catch(e) { console.error('Vocab failed:', e); }
  try { if(typeof sentencesData !== 'undefined') buildSentences(); } catch(e) { console.error('Sentences failed:', e); }
  try { buildRightPanel(); } catch(e) { console.error('RightPanel failed:', e); }
  try { if(typeof audioData !== 'undefined') buildAudio(); } catch(e) { console.error('Audio failed:', e); }
  try { if(typeof buildStories === 'function') buildStories(); } catch(e) { console.error('Stories failed:', e); }
  console.log('Initialization complete.');
}

function createParticles() {
  const c = document.getElementById('particles');
  if(!c) return;
  for(let i=0;i<30;i++){
    const p = document.createElement('div');
    p.className='particle';
    p.style.cssText=`--x:${Math.random()*100}%;--dur:${8+Math.random()*12}s;--delay:${Math.random()*10}s`;
    c.appendChild(p);
  }
}

function buildQuickLetters() {
  const c = document.getElementById('quickLetters');
  if(!c) return;
  alphabetData.forEach(l => {
    const btn = document.createElement('button');
    btn.style.cssText='background:var(--bg-card);border:1px solid var(--border);color:var(--primary);padding:4px;border-radius:6px;cursor:pointer;font-family:Montserrat,sans-serif;font-weight:800;font-size:0.85rem;transition:all 0.2s;';
    btn.textContent=l.letter;
    btn.onclick=()=>openLetterModal(l);
    btn.id=`ql-${l.letter}`;
    c.appendChild(btn);
  });
}

function updateQuickLetters() {
  learned.forEach(lt => {
    const btn = document.getElementById(`ql-${lt}`);
    if(btn) { btn.style.background='#e8f5e9'; btn.style.borderColor='var(--success)'; btn.style.color='var(--success)'; }
  });
  document.getElementById('learnedCount').textContent = learned.size;
  document.getElementById('overallProgress').style.width = (learned.size/26*100)+'%';
  document.getElementById('pb1').style.width = (learned.size/26*100)+'%';
}

function buildAlphabet() {
  const grid = document.getElementById('alphabetGrid');
  grid.innerHTML = '';
  alphabetData.filter(l => alphaFilter==='all' || (alphaFilter==='vowels' && l.type==='vowel') || (alphaFilter==='consonants' && l.type==='consonant')).forEach((l,i) => {
    const card = document.createElement('div');
    card.className = 'letter-card fade-in' + (learned.has(l.letter)?' learned':'');
    card.style.animationDelay = (i*0.04)+'s';
    card.innerHTML = `
      <div class="letter-big">
        ${l.letter} 
        <button class="audio-btn" onclick="playAudio('${l.letter}', event)">🔊</button>
      </div>
      <div class="letter-small">${l.letter.toLowerCase()}</div>
      <div class="letter-sound">/${l.sound}/</div>
      <div class="letter-example-img">${l.examples[0].emoji}</div>
      <div class="letter-example">${l.examples[0].word}</div>
      <div class="letter-arabic">${l.examples[0].ar}</div>
    `;
    card.onclick=()=>openLetterModal(l);
    grid.appendChild(card);
  });
}

function filterAlpha(type, btn) {
  alphaFilter = type;
  document.querySelectorAll('#alphabetSection .filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  buildAlphabet();
}

function openLetterModal(l) {
  const overlay = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');
  const isLearned = learned.has(l.letter);
  content.innerHTML = `
    <button class="modal-close" onclick="closeModal(event)">✕</button>
    <div class="modal-letter">
       ${l.letter} 
       <button class="audio-btn" style="width:50px;height:50px;font-size:1.5rem;" onclick="playAudio('${l.letter}', event)">🔊</button>
    </div>
    <div class="modal-letter-small">${l.letter.toLowerCase()}</div>
    <div class="modal-phonetic">/${l.sound}/ — ${l.type === 'vowel' ? '🔴 حرف علة' : '🟢 حرف ساكن'}</div>
    <div class="modal-examples">
      ${l.examples.map(ex=>`
        <div class="modal-example-card">
          <div class="emoji">${ex.emoji}</div>
          <div class="word">
            <span class="hl">${l.letter}</span>${ex.word.slice(1)}
            <button class="audio-btn" onclick="playAudio('${ex.word.replace(/'/g, "\\'")}', event)">🔊</button>
          </div>
          <div class="meaning">${ex.ar}</div>
        </div>
      `).join('')}
    </div>
    <div class="arabic-note">${l.arabic}</div>
    <button class="modal-mark-btn" onclick="markLearned('${l.letter}')" id="markBtn-${l.letter}">
      ${isLearned ? '✅ تم التعلم!' : '✓ علّم كمكتمل'}
    </button>
  `;
  overlay.classList.add('open');
}

function markLearned(letter) {
  learned.add(letter);
  const btn = document.getElementById(`markBtn-${letter}`);
  if(btn) btn.textContent = '✅ تم التعلم!';
  document.querySelectorAll('.letter-card').forEach(card => {
    if(card.querySelector('.letter-big') && card.querySelector('.letter-big').innerText.includes(letter)) {
      card.classList.add('learned');
    }
  });
  updateQuickLetters();
}

function closeModal(e) {
  if(!e || e.target.classList.contains('modal-overlay') || e.target.classList.contains('modal-close')) {
    document.getElementById('modalOverlay').classList.remove('open');
  }
}

function buildGrammar() {
  const grid = document.getElementById('grammarGrid');
  grid.innerHTML = '';
  grammarData.filter(g => grammarFilter==='all' || g.level===grammarFilter).forEach((g,i) => {
    const card = document.createElement('div');
    card.className = 'grammar-card fade-in';
    card.style.animationDelay = (i*0.05)+'s';
    card.innerHTML = `
      <div class="gc-icon">${g.icon}</div>
      <div class="gc-level">${g.levelAr} · LEVEL</div>
      <div class="gc-title">${g.title}</div>
      <div class="gc-en">${g.en}</div>
      <div class="gc-desc">${g.desc}</div>
      <div class="gc-example">
        ${g.examples[0].en}
        <button class="audio-btn" style="float:right" onclick="playAudio('${g.examples[0].en.replace(/'/g, "\\'")}', event)">🔊</button>
      </div>
      <div class="gc-example-ar">${g.examples[0].ar}</div>
    `;
    card.onclick=()=>openGrammarModal(g);
    grid.appendChild(card);
  });
}

function filterGrammar(type, btn) {
  grammarFilter = type;
  document.querySelectorAll('#grammarSection .filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  buildGrammar();
}

function openGrammarModal(g) {
  const overlay = document.getElementById('grammarModalOverlay');
  const content = document.getElementById('grammarModalContent');
  
  content.innerHTML = `
    <button class="modal-close" onclick="closeGrammarModal(event)">✕</button>
    <div style="text-align:center;font-size:3.5rem;margin-bottom:1rem">${g.icon}</div>
    <h2 style="text-align:center;font-size:1.6rem;font-weight:900;color:var(--primary);margin-bottom:0.3rem">${g.title}</h2>
    <p style="text-align:center;font-size:0.95rem;color:var(--text-main);font-family:Montserrat,sans-serif;margin-bottom:1.5rem; font-weight:800;">${g.en}</p>
    
    ${g.rules.map(r=>`
      <div class="gm-rule">
        <h4>${r.h}</h4>
        <p>${r.p}</p>
      </div>
    `).join('')}

    <button class="grammar-explain-btn" onclick="toggleMindmap(event)">💡 إظهار الشرح المبسط والخريطة الذهنية</button>
    
    <div id="mindmapContent" class="mindmap-section" style="display:none;">
      <h4 class="mindmap-title">🧠 شرح مبسّط وخريطة ذهنية</h4>
      <p style="color:var(--text-main); font-size:0.95rem; text-align:right; margin-bottom:1rem; line-height:1.7; font-weight:700;">${g.explanation}</p>
      <div class="mindmap-container">
        <div class="mm-center">${g.mindmap.center}</div>
        <div class="mm-branches">
          ${g.mindmap.branches.map(b => `
            <div class="mm-branch">
              <div class="mm-branch-title">${b.t}</div>
              <div class="mm-branch-text">${b.d}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="panel-title" style="margin-bottom:0.8rem; margin-top:2rem;">أمثلة مع النطق</div>
    <div class="gm-examples">
      ${g.examples.map(ex=>`
        <div class="gm-ex">
          <span class="en">
             ${ex.en} 
             <button class="audio-btn" onclick="playAudio('${ex.en.replace(/'/g, "\\'")}', event)">🔊</button>
          </span>
          <span class="ar">${ex.ar}</span>
        </div>
      `).join('')}
    </div>
  `;
  overlay.classList.add('open');
}

function toggleMindmap(e) {
  if (e) e.stopPropagation();
  const el = document.getElementById('mindmapContent');
  if(el.style.display === 'none') {
    el.style.display = 'block';
  } else {
    el.style.display = 'none';
  }
}

function closeGrammarModal(e) {
  if(!e || e.target.classList.contains('modal-overlay') || e.target.classList.contains('modal-close')) {
    document.getElementById('grammarModalOverlay').classList.remove('open');
  }
}

function buildVocab() {
  const grid = document.getElementById('vocabGrid');
  if(!grid) return;
  const q = document.getElementById('vocabSearch') ? document.getElementById('vocabSearch').value.toLowerCase() : '';
  const cat = document.getElementById('vocabCat') ? document.getElementById('vocabCat').value : 'all';
  const filtered = vocabData.filter(v =>
    (cat==='all'||v.cat===cat) &&
    (!q || v.word.toLowerCase().includes(q) || v.mean.includes(q))
  );
  const catNames = {animal:'حيوان',bird:'طائر',plant:'نبات',food:'طعام',body:'جسم',job:'وظيفة',color:'لون',clothes:'ملابس',action:'فعل',desc:'صفة',place:'مكان',item:'شيء',basic:'أساسي',time:'زمن'};
  grid.innerHTML = filtered.map((v,i) => `
    <div class="vocab-card fade-in" style="animation-delay:${Math.min(i*0.02,1)}s">
      <div class="vc-header">
        <span class="vc-word">${v.word}</span>
        <button class="audio-btn" onclick="playAudio('${v.word.replace(/'/g, "\\'")}', event)">🔊</button>
      </div>
      <div class="vc-phonetic">${v.phon}</div>
      <div class="vc-mean">${v.mean}</div>
      <div class="vc-ex">${v.ex}</div>
    </div>
  `).join('');
}

function filterVocab() {
  buildVocab();
}

function buildSentences() {
  const grid = document.getElementById('sentencesGrid');
  if(!grid) return;
  grid.innerHTML = '';
  sentencesData.filter(s => sentenceFilter==='all' || s.type===sentenceFilter).forEach((s,i) => {
    const card = document.createElement('div');
    card.className = 'sentence-card fade-in';
    card.style.animationDelay = (i*0.05)+'s';
    card.innerHTML = `
      <div class="sentence-type">${s.typeAr}</div>
      <div class="sentence-en">
         ${s.en} 
         <button class="audio-btn" onclick="playAudio('${s.en.replace(/'/g, "\\'")}', event)">🔊</button>
      </div>
      <div class="sentence-ar">${s.ar}</div>
      <div class="sentence-breakdown">
        ${s.parts.map(p=>`
           <div class="word-chip" onclick="playAudio('${p.en.replace(/'/g, "\\'")}', event)">
              <span class="wc-en">${p.en}</span>
              <span class="wc-ar">${p.ar}</span>
           </div>
        `).join('')}
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterSentences(type, btn) {
  sentenceFilter = type;
  document.querySelectorAll('#sentencesSection .filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  buildSentences();
}

function buildAudio() {
  const grid = document.getElementById('audioGrid');
  if(!grid) return;
  grid.innerHTML = audioData.map((a,i) => `
    <div class="audio-card fade-in" style="animation-delay:${i*0.05}s">
      <div class="audio-title">${a.title}</div>
      <div class="audio-en">${a.en}</div>
      <div class="audio-ar">${a.ar}</div>
      <button class="audio-play-btn" onclick="playAudio('${a.en.replace(/'/g, "\\'")}', event)">▶️ استمع للمحادثة كاملة</button>
    </div>
  `).join('');
}

function buildRightPanel() {
  const words = vocabData;
  const w = words[Math.floor(Math.random()*words.length)];
  document.getElementById('wordOfDay').innerHTML = `
    <div class="rp-word">
       ${w.word}
       <button class="audio-btn" onclick="playAudio('${w.word.replace(/'/g, "\\'")}', event)">🔊</button>
    </div>
    <div class="rp-phonetic">${w.phon}</div>
    <div class="rp-meaning">${w.mean}</div>
    <div class="rp-sentence">${w.ex}</div>
    <div class="rp-sentence-ar">${w.mean} — كلمة اليوم</div>
  `;

  const cw = document.getElementById('commonWords');
  const top8 = vocabData.slice(0,8);
  cw.innerHTML = top8.map(w=>`
    <div class="rp-card" style="margin-bottom:0.5rem;display:flex;justify-content:space-between;align-items:center;padding:0.8rem;">
      <div style="display:flex; flex-direction:column; gap:5px;">
         <span style="font-family:Montserrat,sans-serif;font-weight:800;color:var(--primary);font-size:1rem">${w.word}</span>
         <span style="font-size:0.85rem;color:var(--text-muted);font-weight:700;">${w.mean}</span>
      </div>
      <button class="audio-btn" onclick="playAudio('${w.word.replace(/'/g, "\\'")}', event)">🔊</button>
    </div>
  `).join('');
}

// ============ QUIZ LOGIC ============
function startQuiz() {
  currentQIdx = 0;
  quizScore = 0;
  quizActive = true;
  document.getElementById('quizResult').style.display = 'none';
  document.getElementById('quizCard').style.display = 'block';
  loadQuestion();
}

function loadQuestion() {
  const qObj = quizData[currentQIdx];
  document.getElementById('qCurrent').innerText = currentQIdx + 1;
  document.getElementById('qTotal').innerText = quizData.length;
  document.getElementById('quizScoreVal').innerText = quizScore;
  document.getElementById('quizProgress').style.width = ((currentQIdx) / quizData.length * 100) + '%';
  
  // Show Level
  document.getElementById('quizQuestion').innerHTML = `
    <span style="font-size:0.8rem; color:var(--accent); background:var(--highlight); padding:3px 10px; border-radius:10px; margin-bottom:10px; display:inline-block;">مستوى: ${qObj.lvl}</span>
    <br>${qObj.q}
  `;
  
  const optsDiv = document.getElementById('quizOptions');
  optsDiv.innerHTML = '';
  qObj.options.forEach((opt, idx) => {
    const b = document.createElement('div');
    b.className = 'quiz-option';
    b.innerText = opt;
    b.onclick = () => checkQuizAnswer(idx, b);
    optsDiv.appendChild(b);
  });
}

function checkQuizAnswer(idx, btn) {
  if (!quizActive) return;
  quizActive = false; // block fast clicks
  const qObj = quizData[currentQIdx];
  const allBtns = document.querySelectorAll('.quiz-option');
  
  if (idx === qObj.a) {
    btn.classList.add('correct');
    quizScore += 10;
    playAudio('Correct', null); // English text for synthesis
  } else {
    btn.classList.add('wrong');
    allBtns[qObj.a].classList.add('correct');
    playAudio('Wrong', null);
  }
  
  document.getElementById('quizScoreVal').innerText = quizScore;
  
  setTimeout(() => {
    currentQIdx++;
    if (currentQIdx < quizData.length) {
      quizActive = true;
      loadQuestion();
    } else {
      showQuizResult();
    }
  }, 1500);
}

function showQuizResult() {
  document.getElementById('quizProgress').style.width = '100%';
  document.getElementById('quizCard').style.display = 'none';
  const res = document.getElementById('quizResult');
  res.style.display = 'block';
  document.getElementById('finalScoreVal').innerText = `حصلت على ${quizScore} من ${quizData.length * 10}`;
}

// ============ NAVIGATION ============
function showSection(name) {
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  const target = document.getElementById(name+'Section');
  if (target) target.classList.add('active');
  if(name==='home') document.getElementById('homeSection').classList.add('active');
}

function setActive(btn) {
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}

function highlightSidebar(btn) {
  document.querySelectorAll('.sidebar-item').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}

// Init called at the bottom


// ============ STORIES LOGIC ============
function buildStories() {
  const grid = document.getElementById('storiesGrid');
  if(!grid) return;
  grid.innerHTML = storiesData.map((s,i) => `
    <div class="story-card fade-in" style="animation-delay:${i*0.05}s" onclick="openStoryModal(${s.id})">
      <img src="${s.img}" class="story-img" alt="${s.title}">
      <div class="story-content">
        <div class="story-title">${s.title}</div>
        <div class="story-desc">${s.desc}</div>
      </div>
    </div>
  `).join('');
}

function openStoryModal(id) {
  const s = storiesData.find(x => x.id === id);
  if(!s) return;
  const overlay = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');
  
  content.innerHTML = `
    <button class="modal-close" onclick="closeModal(event)">✕</button>
    <img src="${s.img}" class="story-modal-img" alt="${s.title}">
    <h2 style="font-size:2rem; font-weight:900; color:var(--primary); margin-bottom:1rem;">${s.title}</h2>
    <div class="story-dialogue">
      ${s.dialogue.map(d => `
        <div class="dialogue-line">
          <div class="dialogue-en">
            ${d.en}
            <button class="audio-btn" onclick="playAudio('${d.en.replace(/'/g, "\\'")}', event)">🔊</button>
          </div>
          <div class="dialogue-ar">${d.ar}</div>
        </div>
      `).join('')}
    </div>
  `;
  overlay.classList.add('open');
}

// ============ KIDS QUIZ LOGIC ============

let currentLevel = 0;
let levelQuestions = [];
let currentKidsQIdx = 0;
let kidsQuizScore = 0;
let kidsQuizActive = false;

function showKidsLevels() {
  document.getElementById('kidsLevelSelect').style.display = 'grid';
  document.getElementById('kidsQuizGame').style.display = 'none';
  document.getElementById('kidsQuizResult').style.display = 'none';
}

function startKidsQuiz(level) {
  currentLevel = level;
  // Each level has 20 questions
  levelQuestions = kidsQuizData.slice(level * 20, (level + 1) * 20);
  currentKidsQIdx = 0;
  kidsQuizScore = 0;
  kidsQuizActive = true;
  
  document.getElementById('kidsLevelSelect').style.display = 'none';
  document.getElementById('kidsQuizGame').style.display = 'block';
  document.getElementById('kidsQuizResult').style.display = 'none';
  document.getElementById('kidsQuizCard').style.display = 'block';
  
  loadKidsQuestion();
}

function loadKidsQuestion() {
  const qObj = levelQuestions[currentKidsQIdx];
  document.getElementById('kqCurrent').innerText = currentKidsQIdx + 1;
  document.getElementById('kqTotal').innerText = levelQuestions.length;
  document.getElementById('kidsQuizScoreVal').innerText = kidsQuizScore;
  document.getElementById('kidsQuizProgress').style.width = ((currentKidsQIdx) / levelQuestions.length * 100) + '%';
  
  document.getElementById('kidsQuizQuestion').innerText = qObj.q;
  
  const imgDiv = document.getElementById('kidsQuizImage');
  if (qObj.img.startsWith('http')) {
     imgDiv.innerHTML = `<img src="${qObj.img}" class="kids-image-real">`;
  } else {
     imgDiv.innerHTML = `<div class="kids-img-display">${qObj.img}</div>`;
  }
  
  const optsDiv = document.getElementById('kidsQuizOptions');
  optsDiv.innerHTML = '';
  qObj.options.forEach((opt, idx) => {
    const b = document.createElement('div');
    b.className = 'quiz-option';
    b.innerText = opt;
    b.onclick = () => checkKidsQuizAnswer(idx, b);
    optsDiv.appendChild(b);
  });
}

function checkKidsQuizAnswer(idx, btn) {
  if (!kidsQuizActive) return;
  kidsQuizActive = false;
  const qObj = levelQuestions[currentKidsQIdx];
  const allBtns = document.querySelectorAll('#kidsQuizOptions .quiz-option');
  
  if (idx === qObj.a) {
    btn.classList.add('correct');
    kidsQuizScore += 10;
    playAudio('Excellent!', null);
  } else {
    btn.classList.add('wrong');
    allBtns[qObj.a].classList.add('correct');
    playAudio('Try again!', null);
  }
  
  document.getElementById('kidsQuizScoreVal').innerText = kidsQuizScore;
  
  setTimeout(() => {
    currentKidsQIdx++;
    if (currentKidsQIdx < levelQuestions.length) {
      kidsQuizActive = true;
      loadKidsQuestion();
    } else {
      showKidsQuizResult();
    }
  }, 1500);
}

function showKidsQuizResult() {
  document.getElementById('kidsQuizProgress').style.width = '100%';
  document.getElementById('kidsQuizCard').style.display = 'none';
  const res = document.getElementById('kidsQuizResult');
  res.classList.add('active'); // ensure it's visible
  res.style.display = 'block';
  document.getElementById('kidsFinalScoreVal').innerText = 'أنهيت المستوى بنجاح! حصلت على ' + kidsQuizScore + ' من ' + (levelQuestions.length * 10);
}

function setActiveBnav(btn) {
  document.querySelectorAll('.bnav-item').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}

// Final Init
init();
