const knowledgeTestArray = [
  {
    number: 1,
    question: "認養貓咪之後，要如何評估貓咪適合打三合一疫苗？",
    choices: {
      A: "至少要 6 至 8 周以上並且還沒斷奶，身體狀況良好",
      B: "至少要 6 至 8 周以上並且已斷奶，身體狀況良好",
      C: "至少要 3 至 5 周以上並且已斷奶，身體狀況良好",
      D: "至少要 3 至 5 周以上並且還沒斷奶，身體狀況良好",
    },
    photo: "01.png",
    answer: "B",
    detail: [
      "貓咪至少要 6 至 8 周以上並且已經斷奶，一旦施打第一劑疫苗後，隔一個月的時間就能施打第二劑疫苗，在 14 至 16 週後施打第三劑疫苗，就能有效讓貓咪產生抗體。",
    ],
  },
  {
    number: 2,
    question: "下列何種為正確餵食貓咪的方式？",
    choices: {
      A: "只給貓咪吃乾食，因為經濟實惠",
      B: "將貓咪偏好的副食罐做為正餐餵食",
      C: "用吃剩的晚餐餵食貓咪",
      D: "選擇定時餵食貓罐頭與乾糧",
    },
    photo: "02.png",
    answer: "D",
    detail: [
      "「定時餵食」的好處在於讓貓咪習慣某個時間點有食物吃，監控飲食、了解貓咪食量的多寡與變化，確保貓咪攝取足夠的營養。",
    ],
  },
  {
    number: 3,
    question: "以下關於貓草的敘述，何者錯誤？",
    choices: {
      A: "貓草指的是新鮮的貓草（Cat grass），又稱貓燕麥草、貓小麥草",
      B: "富含豐富的植物纖維、維他命C、礦物質等，可以幫助貓貓補充營養",
      C: "將貓草切碎，混在鮮食或罐頭裡",
      D: "每一餐都給貓咪吃貓草",
    },
    photo: "03.png",
    answer: "D",
    detail: ["貓草的餵食最好是一周2-3次就好。"],
  },
  {
    number: 4,
    question: "以下何者並非常見的貓咪疾病？",
    choices: {
      A: "貓糖尿病",
      B: "慢性腎衰竭",
      C: "將貓免疫不全症候群",
      D: "肌肉肥大症",
    },
    photo: "04.png",
    answer: "D",
    detail: [
      "肌肉肥大症為罕見疾病，指罹患與肌肉生長抑制素相關的肌肉肥大症（Myostatin-related muscle hypertrophy），此類基因突變會讓動物在沒有特別訓練肌肉的情況下，造成過度生長的情形發生。",
    ],
  },
  {
    number: 5,
    question: "下列何者是貓咪常見的傳染疾病？",
    choices: {
      A: "貓卡里西病毒",
      B: "冠狀病毒",
      C: "貓瘟",
      D: "以上皆是",
    },
    photo: "05.png",
    answer: "D",
    detail: [
      "（A）貓科卡里西病毒 （FCV） 是貓咪身上常見的病毒之一，其症狀包括鼻腔分泌物、牙齦炎及口腔潰瘍。通常貓咪感染後，會需要數週到數個月的時間才能完全康復。",
      "（B）很多人對冠狀病毒有很深的誤解，覺得冠狀病毒=腹膜炎，但冠狀病毒其實是個高傳染低發病低突變的病毒。",
      "（C）貓瘟是由貓小病毒（Feline Parvovirus）感染所引起的病毒性傳染病，會抑制骨髓的造血細胞，尤其此類病毒的適應力強，可存在環境中長達數年。",
    ],
  },
  {
    number: 6,
    question: "如何貓咪為什麼會想把東西推到地板？",
    choices: {
      A: "激發狩獵本能",
      B: "吸引目光",
      C: "純粹想玩耍",
      D: "以上皆是",
    },
    photo: "06.png",
    answer: "D",
    detail: [
      "（D）對於貓咪而言，飼主就是牠們最親密的家人，牠們奉獻一生的時間陪伴，不過貓咪可能會常把東西推到地板的行為，往往是因為他們與生俱來的狩獵本質、玩樂心態，又或是想吸引主人的關係。",
    ],
  },
  {
    number: 7,
    question: "剛到新環境時，何種做法可能不行協助貓咪建立信任感？",
    choices: {
      A: "激發狩飼養籠蓋布、但不用一定要關龍，提供貓咪一處隱蔽的角落獵本能",
      B: "舒適的小貓床，或是網購的紙箱",
      C: "獨留貓咪在家且不關窗",
      D: "在飼養龍旁，準備好食物碗",
    },
    photo: "07.png",
    answer: "C",
    detail: [
      "（C）獨留貓咪在家中時，務必要記得關窗，避免貓咪不小心摔落等危險的發生。",
    ],
  },
  {
    number: 8,
    question: "下列關於貓咪的敘述何者正確？",
    choices: {
      A: "目前沒有任何屬於貓咪的健康保險",
      B: "貓咪弄掉物品或發出叫聲，是希望引起認養人的注意",
      C: "貓咪約從 15 歲時身體會開始退化",
      D: "高齡的貓咪不容易得到口腔疾病",
    },
    photo: "08.png",
    answer: "B",
    detail: [
      "（A）市面上有許多寵物保險，但記得多看看、多比較，同時留意醫療理賠制度、理賠次數上限等部分",
      "（C）約 7 歲時身體便開始退化",
      "（D）貓咪年紀越大，越容易出現各種老化的跡象，也容易有口腔疾病的發生",
    ],
  },
];

export default knowledgeTestArray;
