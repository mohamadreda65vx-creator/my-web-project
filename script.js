// ============ SPEECH SYNTHESIS ENGINE (Teacher Voice) ============
function playAudio(text, event) {
  if (event) event.stopPropagation();
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US'; 
    utterance.rate = 0.70; // هادئ جداً وبطيء للتعلم
    utterance.pitch = 0.9; // خافت وغير حاد
    
    // محاولة اختيار صوت طبيعي أو نسائي إن وجد
    const voices = window.speechSynthesis.getVoices();
    const teacherVoice = voices.find(v => v.name.includes('Female') || v.name.includes('UK') || v.name.includes('Zira') || v.name.includes('Samantha'));
    if(teacherVoice) utterance.voice = teacherVoice;

    window.speechSynthesis.speak(utterance);
  } else {
    alert('عذراً، متصفحك الحالي لا يدعم خاصية نطاق الصوت.');
  }
}

// Ensure voices are loaded
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

// ============ DATA ============
const alphabetData = [
  { letter:'A', sound:'eɪ', type:'vowels', examples:[{word:'Apple',emoji:'🍎',ar:'تفاحة'}], arabic:'ينطق كألف ممدودة أو قصيرة حسب مكانه.' },
  { letter:'B', sound:'biː', type:'consonants', examples:[{word:'Ball',emoji:'⚽',ar:'كرة'}], arabic:'مطابق تماماً لصوت الباء، لا يُنطق إذا جاء بعد M في آخر الكلمة.' },
  { letter:'C', sound:'siː', type:'consonants', examples:[{word:'Cat',emoji:'🐱',ar:'قطة'}], arabic:'يُنطق (س) إذا لحقه e, i, y، ودون ذلك يُنطق (ك).' },
  { letter:'D', sound:'diː', type:'consonants', examples:[{word:'Dog',emoji:'🐶',ar:'كلب'}], arabic:'مطابق لصوت الدال العربية الدقيقة.' },
  { letter:'E', sound:'iː', type:'vowels', examples:[{word:'Egg',emoji:'🥚',ar:'بيضة'}], arabic:'حرف علة. صوته ككسرة خفيفة، وإذا تكرر (ee) يصبح مد ياء.' },
  { letter:'F', sound:'ɛf', type:'consonants', examples:[{word:'Fish',emoji:'🐟',ar:'سمكة'}], arabic:'يشبه الفاء حرفياً.' },
  { letter:'G', sound:'dʒiː', type:'consonants', examples:[{word:'Goat',emoji:'🐐',ar:'ماعز'}], arabic:'يُنطق كالجيم المصرية غالباً، وأحياناً جيم معطشة إذا جاء بعده e, i, y.' },
  { letter:'H', sound:'eɪtʃ', type:'consonants', examples:[{word:'House',emoji:'🏠',ar:'بيت'}], arabic:'ينطق هاء واضحة.' },
  { letter:'I', sound:'aɪ', type:'vowels', examples:[{word:'Ice',emoji:'🧊',ar:'ثلج'}], arabic:'يُنطق (آي) أو مثل الكسرة.' },
  { letter:'J', sound:'dʒeɪ', type:'consonants', examples:[{word:'Juice',emoji:'🧃',ar:'عصير'}], arabic:'جيم معطشة (دج).' },
  { letter:'K', sound:'keɪ', type:'consonants', examples:[{word:'Key',emoji:'🗝️',ar:'مفتاح'}], arabic:'كاف. ولا ينطق إذا جاء في أول الكلمة يليه حرف N.' },
  { letter:'L', sound:'ɛl', type:'consonants', examples:[{word:'Lion',emoji:'🦁',ar:'أسد'}], arabic:'لام واضحة.' },
  { letter:'M', sound:'ɛm', type:'consonants', examples:[{word:'Moon',emoji:'🌙',ar:'قمر'}], arabic:'حرف الميم.' },
  { letter:'N', sound:'ɛn', type:'consonants', examples:[{word:'Night',emoji:'🌙',ar:'ليل'}], arabic:'حرف النون.' },
  { letter:'O', sound:'oʊ', type:'vowels', examples:[{word:'Orange',emoji:'🍊',ar:'برتقالة'}], arabic:'واو مضمومة بقوة.' },
  { letter:'P', sound:'piː', type:'consonants', examples:[{word:'Panda',emoji:'🐼',ar:'باندا'}], arabic:'باء مع خروج الكثير من الهواء من الشفتين.' },
  { letter:'Q', sound:'kjuː', type:'consonants', examples:[{word:'Queen',emoji:'👸',ar:'ملكة'}], arabic:'دائماً يأتي بعده U ويُنطق (كْوَ).' },
  { letter:'R', sound:'ɑːr', type:'consonants', examples:[{word:'Rabbit',emoji:'🐰',ar:'أرنب'}], arabic:'الراء الإنجليزية لا تُلامس سقف الحلق.' },
  { letter:'S', sound:'ɛs', type:'consonants', examples:[{word:'Sun',emoji:'☀️',ar:'شمس'}], arabic:'سين صريحة. وقد يُنطق (ز) بين حرفي علة.' },
  { letter:'T', sound:'tiː', type:'consonants', examples:[{word:'Tree',emoji:'🌳',ar:'شجرة'}], arabic:'تاء قوية مع قليل من الهمس.' },
  { letter:'U', sound:'juː', type:'vowels', examples:[{word:'Umbrella',emoji:'☂️',ar:'شمسية'}], arabic:'حرف علة. إما (يو) أو أ مثل الفتحة المفخمة.' },
  { letter:'V', sound:'viː', type:'consonants', examples:[{word:'Van',emoji:'🚐',ar:'شاحنة'}], arabic:'فـ قوية تهتز الحبال الصوتية معها.' },
  { letter:'W', sound:'dʌbljuː', type:'consonants', examples:[{word:'Water',emoji:'💧',ar:'ماء'}], arabic:'تُنطق واو (وَ).' },
  { letter:'X', sound:'ɛks', type:'consonants', examples:[{word:'X-ray',emoji:'🩻',ar:'أشعة'}], arabic:'تُنطق بشكل أساسي (كس).' },
  { letter:'Y', sound:'waɪ', type:'consonants', examples:[{word:'Yellow',emoji:'💛',ar:'أصفر'}], arabic:'في البداية تُنطق ياء.' },
  { letter:'Z', sound:'ziː', type:'consonants', examples:[{word:'Zero',emoji:'0️⃣',ar:'صفر'}], arabic:'حرف زاي قوي يهتز.' }
];

const grammarData = [
  { 
    id:1, icon:'👤', level:'basic', title:'الضمائر الشخصية (Pronouns)', en:'I, You, He, She...',
    desc:'هي أول وأهم خطوة في تعلم التحدث، نستخدمها بدلاً من أسماء الأشخاص لتجنب التكرار.',
    examples:[
      {en:'I am a student, and he is a doctor.', ar:'أنا طالب، وهو طبيب.'},
      {en:'She works hard every day.', ar:'هي تعمل بجد كل يوم.'},
      {en:'We love playing football.', ar:'نحن نحب لعب كرة القدم.'}
    ], 
    rules:[
      {h:'1. المتكلم',p:'I (أنا) | We (نحن) - نستخدمها عندما تتحدث عن نفسك أو بالنيابة عن مجموعة.'},
      {h:'2. المخاطب',p:'You (أنت / أنتم) - تستخدم للمفرد والجمع على حد سواء.'},
      {h:'3. الغائب',p:'He (هو للعاقل) | She (هي للعاقل) | It (هو/هي لغير العاقل مثل الحيوانات والجمادات) | They (هم - للجمع العاقل وغير العاقل).'}
    ],
    explanation: 'تخيل أنك تتحدث عن صديقك "أحمد"، هل يعقل أن تقول: (أحمد ذهب للسوق، وأحمد اشترى تفاحاً، ثم عاد أحمد)؟ بالطبع لا! في اللغة الإنجليزية نعوض الاسم دائماً بضمير فاعل. الجملة الإنجليزية **يجب** أن تبدأ بفاعل (إما اسم شخص، أو ضمير ينوب عنه).',
    mindmap: { center: 'الضمائر 👤', branches: [{t:'I', d:'أنا (متكلم)'}, {t:'He, She, It', d:'غائب (هو, هي..)'}, {t:'We, Then, You', d:'جمع ومخاطب'}] }
  },
  { 
    id:2, icon:'⚓', level:'basic', title:'فعل (To Be) - الكينونة', en:'Am, Is, Are', 
    desc:'فعل محوري وخفي في اللغة العربية ولكنه إلزامي في اللغة الإنجليزية.', 
    examples:[
      {en:'I am happy today.', ar:'أنا سعيد اليوم. (حرفياً: أنا أكون سعيد)'},
      {en:'The dog is fast.', ar:'الكلب سريع.'},
      {en:'They are my friends.', ar:'هم أصدقائي.'}
    ], 
    rules:[
      {h:'أم (Am)', p:'تأتي فقط ومستحيل تأتي إلا مع الضمير I. (I am).'},
      {h:'إز (Is)', p:'تأتي مع المفرد الغائب He, She, It، أو أي اسم مفرد (Sara is, The car is).'},
      {h:'آر (Are)', p:'تأتي مع الجمع والمخاطب You, We, They أو الأسماء المجموعة (Boys are).'}
    ],
    explanation: 'اللغة العربية لغة بلاغية ولا نحتاج فيها للإشارة لكلمة (أكون)، فنحن نقول: (السماء صافية). أما في الإنجليزية الجملة تُحرم بدون فعل! لذلك إذا أردت وصف اسم أو صفة يجب أن تضع رابط (To be)، فتقول: The sky IS clear.',
    mindmap: { center: 'فعل To Be 🔗', branches: [{t:'Am', d:'مع أنا (I)'}, {t:'Is', d:'للمفرد'}, {t:'Are', d:'للجمع'}] }
  },
  { 
    id:3, icon:'⏰', level:'tenses', title:'المضارع البسيط (Simple Present)', en:'Habits & Truths', 
    desc:'زمن يستخدم للتعبير عن الروتين اليومي والحقائق العلمية الثابتة.', 
    examples:[
      {en:'I wake up at 7 AM.', ar:'أنا أستيقظ في السابعة صباحاً (عادة).'},
      {en:'Water boils at 100 degrees.', ar:'الماء يغلي عند 100 درجة (حقيقة علمية).'},
      {en:'She speaks Arabic perfectly.', ar:'هي تتحدث العربية بطلاقة.'}
    ], 
    rules:[
      {h:'مع الضمائر (I, You, We, They)', p:'الفعل يبقى كما هو دون أي إضافات (I play, You go).'},
      {h:'مع الضمائر (He, She, It)', p:'يجب.. يُشترط.. إضافة حرف (s) أو (es) لنهاية الفعل. (He plays, She goes).'},
      {h:'الكلمات الدالة', p:'Always (دائماً), Usually (عادةً), Every day (كل يوم).'}
    ],
    explanation: 'نستخدم المضارع البسيط حين نتكلم عن أمر يتكرر كل يوم، كل أسبوع، أو حقيقة ثابتة لا تتغير. السر الذي يميز الشخص المبتدئ عن المحترف هو أن لا تنسى أبداً وضع حرف s إذا كان الفاعل مفرداً غائباً (هو أو هي).',
    mindmap: { center: 'المضارع البسيط ⏰', branches: [{t:'بلا إضافة', d:'مع I, We, You, They'}, {t:'إضافة S', d:'مع He, She, It'}, {t:'يستخدم', d:'للعادات اليومية'}] }
  },
  {
    id:4, icon:'▶️', level:'tenses', title:'المضارع المستمر (Present Continuous)', en:'Actions happening NOW',
    desc:'يستخدم للحديث عن أحداث تحدث في هذه اللحظة المستمرة.',
    examples:[
      {en:'I am reading a book right now.', ar:'أنا أقرأ كتاباً في هذه اللحظة.'},
      {en:'Look! It is raining.', ar:'انظر! إنها تمطر.'},
      {en:'We are watching TV.', ar:'نحن نشاهد التلفاز.'}
    ],
    rules:[
      {h:'قاعدة التركيب الخطيرة', p:'الفاعل + فعل To be + الفعل الأساسي بزيادة ing'},
      {h:'أمثلة التركيب', p:'I + am + play + ing = I am playing'},
      {h:'متى لا يُستخدم؟', p:'لا يُستخدم مع أفعال الشعور كالحب والإدراك (لا نقول I am loving you بل I love you).'}
    ],
    explanation: 'تخيل أنك تنظر من النافذة وتقوم بوصف ما يجري أمام عينيك تماماً. هذا هو المضارع المستمر. لكي تصنعه ببراعة، يجب تجهيز الأداة المساعدة (am أو is أو are) ثم أخذ الفعل الرئيسي ولصق كلمة (ing) في ذيله كدليل على أنه مستمر الآن!',
    mindmap: { center: 'المضارع المستمر ▶️', branches: [{t:'التركيب', d:'Am/Is/Are + V.ing'}, {t:'الاستخدام', d:'حدث لحظة الكلام'}, {t:'كلمات دالة', d:'Now, Listen, Look'}] }
  },
  {
    id:5, icon:'⬅️', level:'tenses', title:'الماضي البسيط (Simple Past)', en:'Finished actions in the past',
    desc:'يستخدم لوصف حدث أو فعل بدأ وانتهى في الماضي.',
    examples:[
      {en:'I visited Paris last year.', ar:'لقد زرت باريس العام الماضي.'},
      {en:'They bought a new car yesterday.', ar:'هم اشتروا سيارة جديدة البارحة.'},
      {en:'She did not go to the party.', ar:'هي لم تذهب إلى الحفلة.'}
    ],
    rules:[
      {h:'الأفعال المنتظمة Regular', p:'هي الأفعال الطيبة التي نضيف في نهايتها ed أو d فقط لتحويلها للماضي مثل (Play -> Played).'},
      {h:'الأفعال الشاذة Irregular', p:'يجب حفظها عن ظهر قلب لأنها تتغير تماماً مثل (Go -> Went)، و (See -> Saw).'},
      {h:'الكلمات الدالة', p:'Yesterday (البارحة)، Last week (الأسبوع الماضي)، Ago (منذ).'}
    ],
    explanation: 'الماضي البسيط يتحدث عن أمر أُغلق ملفه الزمني للأسف. بمجرد أن ترى كلمة "البارحة"، ستقوم مباشرة ببحث الماضي من الفعل. وللنفي في الماضي لا نستخدم Don\'t بل نستخدم كلمة قوية جداً وهي (Didn\'t)، وبعدها يعود الفعل لحالته الأصلية!',
    mindmap: { center: 'الماضي البسيط ⬅️', branches: [{t:'منتظم', d:'Add ED'}, {t:'شاذ', d:'حفظ (Eat->Ate)'}, {t:'النفي', d:'Didn\'t + المصدر'}] }
  }
];

// 120+ Real most useful words sorted cleanly
const vocabData = [
  // ACTION VERBS
  { word:'Accept', phon:'/əkˈsɛpt/', mean:'يقبل', cat:'action', ex:'I accept your apology.' },
  { word:'Achieve', phon:'/əˈtʃiːv/', mean:'يحقق / ينجز', cat:'action', ex:'You can achieve your dreams.' },
  { word:'Allow', phon:'/əˈlaʊ/', mean:'يسمح', cat:'action', ex:'Please allow me to pass.' },
  { word:'Begin', phon:'/bɪˈɡɪn/', mean:'يبدأ', cat:'action', ex:'Let the game begin.' },
  { word:'Believe', phon:'/bɪˈliːv/', mean:'يصدق / يعتقد', cat:'action', ex:'I believe in you.' },
  { word:'Call', phon:'/kɔːl/', mean:'يتصل / ينادي', cat:'action', ex:'Call me tomorrow.' },
  { word:'Decide', phon:'/dɪˈsaɪd/', mean:'يقرر', cat:'action', ex:'You need to decide now.' },
  { word:'Discover', phon:'/dɪˈskʌvər/', mean:'يكتشف', cat:'action', ex:'Scientist discover new things.' },
  { word:'Explain', phon:'/ɪkˈspleɪn/', mean:'يشرح / يوضح', cat:'action', ex:'Can you explain this rule?' },
  { word:'Happen', phon:'/ˈhæp.ən/', mean:'يحدث', cat:'action', ex:'What will happen next?' },
  { word:'Improve', phon:'/ɪmˈpruːv/', mean:'يتحسن / يطور', cat:'action', ex:'I want to improve my English.' },
  { word:'Learn', phon:'/lɜːrn/', mean:'يتعلم', cat:'action', ex:'I want to learn swimming.' },
  { word:'Listen', phon:'/ˈlɪsn/', mean:'يستمع', cat:'action', ex:'Listen to your teacher.' },
  { word:'Remember', phon:'/rɪˈmɛmbər/', mean:'يتذكر', cat:'action', ex:'Always remember this day.' },
  { word:'Understand', phon:'/ˌʌndərˈstænd/', mean:'يفهم', cat:'action', ex:'Do you understand me?' },
  
  // ADJECTIVES
  { word:'Accurate', phon:'/ˈæk.jʊ.rət/', mean:'دقيق', cat:'desc', ex:'The report is very accurate.' },
  { word:'Awesome', phon:'/ˈɔː.səm/', mean:'رائع جداً', cat:'desc', ex:'The movie was awesome.' },
  { word:'Brave', phon:'/breɪv/', mean:'شجاع', cat:'desc', ex:'The soldier is brave.' },
  { word:'Careful', phon:'/ˈker.fəl/', mean:'حذر / منتبه', cat:'desc', ex:'Be careful when driving.' },
  { word:'Clear', phon:'/klɪr/', mean:'واضح', cat:'desc', ex:'The water is clear.' },
  { word:'Curious', phon:'/ˈkjʊr.i.əs/', mean:'فضولي', cat:'desc', ex:'Children are very curious.' },
  { word:'Difficult', phon:'/ˈdɪf.ɪ.kəlt/', mean:'صعب', cat:'desc', ex:'The exam was difficult.' },
  { word:'Easy', phon:'/ˈiː.zi/', mean:'سهل', cat:'desc', ex:'This game is easy.' },
  { word:'Expensive', phon:'/ɪkˈspen.sɪv/', mean:'غالي الثمن', cat:'desc', ex:'That car is too expensive.' },
  { word:'Famous', phon:'/ˈfeɪ.məs/', mean:'مشهور', cat:'desc', ex:'He is a famous actor.' },
  { word:'Happy', phon:'/ˈhæp.i/', mean:'سعيد', cat:'desc', ex:'I feel happy today.' },
  { word:'Important', phon:'/ɪmˈpɔːr.tənt/', mean:'مهم', cat:'desc', ex:'This meeting is important.' },
  { word:'Powerful', phon:'/ˈpaʊ.ɚ.fəl/', mean:'قوي', cat:'desc', ex:'A very powerful engine.' },
  { word:'Quiet', phon:'/ˈkwaɪ.ət/', mean:'هادئ', cat:'desc', ex:'Please keep quiet.' },
  { word:'Useful', phon:'/ˈjuːs.fəl/', mean:'مفيد', cat:'desc', ex:'A dictionary is useful.' },
  
  // PLACES
  { word:'Airport', phon:'/ˈer.pɔːrt/', mean:'مطار', cat:'place', ex:'We are going to the airport.' },
  { word:'Bank', phon:'/bæŋk/', mean:'بنك', cat:'place', ex:'I need to visit the bank.' },
  { word:'Beach', phon:'/biːtʃ/', mean:'شاطئ', cat:'place', ex:'Let us go to the beach.' },
  { word:'Hospital', phon:'/ˈhɑː.spɪ.t̬əl/', mean:'مستشفى', cat:'place', ex:'The hospital is nearby.' },
  { word:'Library', phon:'/ˈlaɪ.brer.i/', mean:'مكتبة', cat:'place', ex:'She studies in the library.' },
  { word:'Market', phon:'/ˈmɑːr.kɪt/', mean:'سوق', cat:'place', ex:'Buy some fruits from the market.' },
  { word:'Pharmacy', phon:'/ˈfɑːr.mə.si/', mean:'صيدلية', cat:'place', ex:'Where is the pharmacy?' },
  { word:'Restaurant', phon:'/ˈres.tə.rɑːnt/', mean:'مطعم', cat:'place', ex:'A nice restaurant.' },
  { word:'University', phon:'/ˌjuː.nəˈvɝː.sə.t̬i/', mean:'جامعة', cat:'place', ex:'He studies at university.' },
  
  // ITEMS / NOUNS
  { word:'Computer', phon:'/kəmˈpjuː.t̬ɚ/', mean:'حاسوب', cat:'item', ex:'Turn on your computer.' },
  { word:'Clock', phon:'/klɑːk/', mean:'ساعة حائط', cat:'item', ex:'Look at the clock.' },
  { word:'Desk', phon:'/desk/', mean:'مكتب (طاولة)', cat:'item', ex:'My keys are on the desk.' },
  { word:'Friend', phon:'/frend/', mean:'صديق', cat:'item', ex:'He is my best friend.' },
  { word:'Keyboard', phon:'/ˈkiː.bɔːrd/', mean:'لوحة مفاتيح', cat:'item', ex:'The keyboard is broken.' },
  { word:'Language', phon:'/ˈlæŋ.ɡwɪdʒ/', mean:'لغة', cat:'item', ex:'English is a language.' },
  { word:'Mistake', phon:'/mɪˈsteɪk/', mean:'خطأ', cat:'item', ex:'Do not make this mistake.' },
  { word:'Question', phon:'/ˈkwes.tʃən/', mean:'سؤال', cat:'item', ex:'I have a question.' },
  { word:'Target', phon:'/ˈtɑːr.ɡɪt/', mean:'هدف', cat:'item', ex:'We reached our target.' }
];

// ============ QUIZ DATA ============
const quizData = [
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
let filteredVocab = [...vocabData];
let grammarFilter = 'all';
let alphaFilter = 'all';

let currentQIdx = 0;
let quizScore = 0;
let quizActive = false;

// ============ INIT ============
function init() {
  buildAlphabet();
  buildGrammar();
  buildVocab();
  setWordOfDay();
}

// ============ ALPHAYBET ============
function buildAlphabet() {
  const grid = document.getElementById('alphabetGrid');
  grid.innerHTML = '';
  alphabetData.filter(l => alphaFilter==='all' || l.type===alphaFilter).forEach((l,i) => {
    const card = document.createElement('div');
    card.className = 'letter-card fade-in';
    card.style.animationDelay = (i*0.03)+'s';
    card.innerHTML = `
      <div class="letter-big">
        ${l.letter} 
        <button class="audio-btn" onclick="playAudio('${l.letter}', event)">🔊</button>
      </div>
      <div class="letter-small">${l.letter.toLowerCase()}</div>
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
  if(btn) btn.classList.add('active');
  buildAlphabet();
}
function openLetterModal(l) {
  const overlay = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <button class="modal-close" onclick="closeModal(event)">✕</button>
    <div style="font-family:Montserrat,sans-serif;font-size:5rem;font-weight:900;color:var(--primary);text-align:center;margin-bottom:1rem;display:flex;justify-content:center;align-items:center;gap:15px;">
       ${l.letter} 
       <button class="audio-btn" style="width:60px;height:60px;font-size:2rem;" onclick="playAudio('${l.letter}', event)">🔊</button>
    </div>
    <div style="font-family:Montserrat,sans-serif;font-size:2rem;font-weight:700;color:var(--accent-light);text-align:center;margin-bottom:1.5rem;">${l.letter.toLowerCase()}</div>
    
    <div style="background:#f6fdf6;border:1px solid var(--border);border-radius:12px;padding:1.5rem;text-align:center;margin-bottom:2rem;">
      <h3 style="color:var(--primary-dark);margin-bottom:0.8rem;font-weight:900;">شرح الحرف</h3>
      <p style="font-weight:700;font-size:1.1rem;color:var(--text-main);">${l.arabic}</p>
    </div>

    <div style="display:flex;justify-content:center;align-items:center;gap:20px;margin-bottom:2rem;">
      ${l.examples.map(ex=>`
        <div style="text-align:center;">
          <div style="font-size:4rem;margin-bottom:1rem;">${ex.emoji}</div>
          <div style="font-family:Montserrat,sans-serif;font-size:1.5rem;font-weight:900;color:var(--text-main);margin-bottom:0.5rem;display:flex;align-items:center;justify-content:center;gap:10px;">
            ${ex.word}
            <button class="audio-btn" onclick="playAudio('${ex.word.replace(/'/g, "\\'")}', event)">🔊</button>
          </div>
          <div style="font-weight:700;color:var(--text-muted);font-size:1.2rem;">${ex.ar}</div>
        </div>
      `).join('')}
    </div>
  `;
  overlay.classList.add('open');
}
function closeModal(e) {
  if(!e || e.target.classList.contains('modal-overlay') || e.target.classList.contains('modal-close')) {
    document.getElementById('modalOverlay').classList.remove('open');
  }
}

// ============ GRAMMAR ============
function buildGrammar() {
  const grid = document.getElementById('grammarGrid');
  grid.innerHTML = '';
  grammarData.filter(g => grammarFilter==='all' || g.level===grammarFilter).forEach((g,i) => {
    const card = document.createElement('div');
    card.className = 'grammar-card fade-in';
    card.style.animationDelay = (i*0.05)+'s';
    card.innerHTML = `
      <div class="gc-icon">${g.icon}</div>
      <div class="gc-title">${g.title}</div>
      <div class="gc-en">${g.en}</div>
      <div style="font-size:0.95rem;color:var(--text-muted);font-weight:700;text-align:center;line-height:1.6;margin-bottom:1.5rem;">${g.desc}</div>
      <button class="start-btn" style="width:100%;font-size:1.05rem;">شرح القاعدة بالكامل 💡</button>
    `;
    card.onclick=()=>openGrammarModal(g);
    grid.appendChild(card);
  });
}
function filterGrammar(type, btn) {
  grammarFilter = type;
  document.querySelectorAll('#grammarSection .filter-btn').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  buildGrammar();
}
function openGrammarModal(g) {
  const overlay = document.getElementById('grammarModalOverlay');
  const content = document.getElementById('grammarModalContent');
  
  content.innerHTML = `
    <button class="modal-close" onclick="closeGrammarModal(event)">✕</button>
    <div style="text-align:center;font-size:4rem;margin-bottom:1rem">${g.icon}</div>
    <h2 style="text-align:center;font-size:2rem;font-weight:900;color:var(--primary);margin-bottom:0.5rem">${g.title}</h2>
    <p style="text-align:center;font-size:1.1rem;color:var(--text-muted);font-family:Montserrat,sans-serif;margin-bottom:2rem;font-weight:800;">${g.en}</p>
    
    <div style="background:var(--highlight);border:2px solid var(--border);border-radius:16px;padding:1.5rem;margin-bottom:2rem;">
       <h3 style="color:var(--primary-dark);font-size:1.3rem;font-weight:900;margin-bottom:1rem;">📌 الشرح التفصيلي:</h3>
       <p style="font-size:1.1rem;line-height:1.8;color:var(--text-main);font-weight:700;">${g.explanation}</p>
    </div>

    ${g.rules.map(r=>`
      <div class="gm-rule">
        <h4>${r.h}</h4>
        <p>${r.p}</p>
      </div>
    `).join('')}

    <h3 style="margin:2rem 0 1rem;font-size:1.3rem;font-weight:900;color:var(--primary);">🎯 أمثلة للتطبيق مع الصوت:</h3>
    <div style="display:flex;flex-direction:column;gap:15px;">
      ${g.examples.map(ex=>`
        <div style="background:#fff;border:1px solid var(--border);border-radius:12px;padding:15px;display:flex;justify-content:space-between;align-items:center;gap:15px;">
           <div>
              <div style="font-family:Montserrat,sans-serif;font-size:1.2rem;font-weight:900;color:var(--primary-dark);margin-bottom:5px;direction:ltr;text-align:left;">${ex.en}</div>
              <div style="font-size:1rem;color:var(--text-muted);font-weight:700;">${ex.ar}</div>
           </div>
           <button class="audio-btn" style="width:45px;height:45px;font-size:1.3rem;" onclick="playAudio('${ex.en.replace(/'/g, "\\'")}', event)">🔊</button>
        </div>
      `).join('')}
    </div>
  `;
  overlay.classList.add('open');
}
function closeGrammarModal(e) {
  if(!e || e.target.classList.contains('modal-overlay') || e.target.classList.contains('modal-close')) {
    document.getElementById('grammarModalOverlay').classList.remove('open');
  }
}

// ============ WORD OF THE DAY ============
function setWordOfDay() {
  const w = vocabData[Math.floor(Math.random()*vocabData.length)];
  const container = document.getElementById('wordOfDay');
  if(!container) return;
  container.innerHTML = `
    <div class="wotd-title">⚡ كلمة اليوم الأساسية</div>
    <div class="wotd-word">
       ${w.word}
       <button class="audio-btn" style="width:50px;height:50px;font-size:1.5rem;" onclick="playAudio('${w.word.replace(/'/g, "\\'")}', event)">🔊</button>
    </div>
    <div class="wotd-phonetic">${w.phon}</div>
    <div class="wotd-meaning">${w.mean}</div>
    <div class="wotd-ex">" ${w.ex} "</div>
  `;
}

// ============ VOCABULARY ============
function buildVocab() {
  const grid = document.getElementById('vocabGrid');
  grid.innerHTML = '';
  
  if(filteredVocab.length === 0) {
    grid.innerHTML = '<div style="text-align:center;width:100%;padding:2rem;font-weight:900;color:var(--text-muted);">لم يتم العثور على نتائج.</div>';
    return;
  }

  filteredVocab.forEach((v,i) => {
    const card = document.createElement('div');
    card.className = 'vocab-card fade-in';
    card.style.animationDelay = (i*0.02)+'s';
    let catText = {action:'فعل', desc:'صفة', place:'مكان', item:'شيء'}[v.cat] || v.cat;
    card.innerHTML = `
      <div class="vc-header">
         <span style="font-size:0.8rem;background:var(--highlight);color:var(--primary);padding:3px 10px;border-radius:20px;font-weight:800;">${catText}</span>
         <button class="audio-btn" onclick="playAudio('${v.word.replace(/'/g, "\\'")}', event)">🔊</button>
      </div>
      <div>
         <div class="vc-word">${v.word}</div>
         <div class="vc-phonetic">${v.phon}</div>
      </div>
      <div class="vc-mean">${v.mean}</div>
      <div class="vc-ex">${v.ex}</div>
    `;
    grid.appendChild(card);
  });
}
function filterVocab() {
  const q = document.getElementById('vocabSearch').value.toLowerCase();
  const cat = document.getElementById('vocabCat').value;
  filteredVocab = vocabData.filter(v =>
    (cat==='all'||v.cat===cat) &&
    (!q || v.word.toLowerCase().includes(q) || v.mean.includes(q))
  );
  buildVocab();
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
  
  document.getElementById('quizQuestion').innerHTML = `
    <span style="font-size:0.9rem; color:var(--white); background:var(--primary); padding:5px 12px; border-radius:10px; margin-bottom:15px; display:inline-block; font-family:'Cairo';">مستوى: ${qObj.lvl}</span>
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
  quizActive = false; 
  const qObj = quizData[currentQIdx];
  const allBtns = document.querySelectorAll('.quiz-option');
  
  if (idx === qObj.a) {
    btn.classList.add('correct');
    quizScore += 10;
    playAudio('Excellent', null);
  } else {
    btn.classList.add('wrong');
    allBtns[qObj.a].classList.add('correct');
    playAudio('Incorrect', null);
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
  document.getElementById('finalScoreVal').innerText = `المجموع: ${quizScore} من ${quizData.length * 10}`;
  playAudio('Congratulations! You finished the test.', null);
}

// ============ NAVIGATION (Bottom Nav) ============
function showSection(name) {
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  const target = document.getElementById(name+'Section');
  if (target) target.classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
}
function setActiveBnav(btn) {
  document.querySelectorAll('.bnav-item').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}

// Initiate functions on load
init();
