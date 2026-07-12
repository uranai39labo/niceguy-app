const questions = [
  { id: 1, text: "定期的に新しい友人を作っている。", axis: "E/I", target: "E" },
  { id: 2, text: "単純明快なアイデアよりも、複雑で斬新なアイデアのほうがワクワクする。", axis: "N/S", target: "N" },
  { id: 3, text: "事実に基づいた議論よりも、感情的に響くものに説得力を感じる。", axis: "T/F", target: "F" },
  { id: 4, text: "自分の生活と仕事の空間は、清潔で整理整頓されている。", axis: "J/P", target: "J" },
  { id: 5, text: "大きなプレッシャーがあっても通常、冷静でいられる。", axis: "A/T", target: "A" },
  { id: 6, text: "人脈を広げたり、見知らぬ人に自分を売り込んだりするのは、とても大変だと感じる。", axis: "E/I", target: "I" },
  { id: 7, text: "仕事に優先順位をつけ、効率的に計画を立て、期限よりかなり前に完了させることが多い。", axis: "J/P", target: "J" },
  { id: 8, text: "数字やデータより、人々の物語や感情のほうがあなたに力強く響く。", axis: "T/F", target: "F" },
  { id: 9, text: "予定表やリストなどの整理・管理ツールを使うのが好き。", axis: "J/P", target: "J" },
  { id: 10, text: "些細なことでも間違えると、自分の能力と知識全般を疑ってしまう。", axis: "A/T", target: "T-Id" },
  { id: 11, text: "事前のアレンジなしに、自分が興味のある人のところに行って話しかけるのは簡単。", axis: "E/I", target: "E" },
  { id: 12, text: "クリエイティブな作品のさまざまな解釈についての議論には、興味がない。", axis: "N/S", target: "S" },
  { id: 13, text: "行動方針を決めるとき、あなたは他の人の感情より事実を大切にします。", axis: "T/F", target: "T" },
  { id: 14, text: "何も計画を立てずに一日を過ごすことがよくある。", axis: "J/P", target: "P" },
  { id: 15, text: "会う人に好印象を残すかどうかは、ほとんど気にしない。", axis: "T/F", target: "T" },
  { id: 16, text: "チームで何かをするのが好き。", axis: "E/I", target: "E" },
  { id: 17, text: "未経験の新しいアプローチを試すのは楽しいと感じる。", axis: "N/S", target: "N" },
  { id: 18, text: "完全に正直であることよりも、思いやりを持つことを優先する。", axis: "T/F", target: "F" },
  { id: 19, text: "新しい経験や知識を積極的に追求する。", axis: "N/S", target: "N" },
  { id: 20, text: "物事が悪い方向に向かうのではないかと心配しがち。", axis: "A/T", target: "T-Id" },
  { id: 21, text: "グループで行う趣味やアクティビティより、一人で行うもののほうが楽しい。", axis: "E/I", target: "I" },
  { id: 22, text: "仕事として架空の物語を書いている自分は想像できない。", axis: "N/S", target: "S" },
  { id: 23, text: "感情的な面を多少無視してでも、効率的な決断を好む。", axis: "T/F", target: "T" },
  { id: 24, text: "やらなければいけないことをしてからリラックスするのが好き。", axis: "J/P", target: "J" },
  { id: 25, text: "意見の相違がある場合、他人の感情をいたわるよりも自分の主張を証明することを優先する。", axis: "T/F", target: "T" },
  { id: 26, text: "社交の場では大抵、最初に他の人が自己紹介するのを待つ。", axis: "E/I", target: "I" },
  { id: 27, text: "とても急に機嫌が変わることがある。", axis: "A/T", target: "T-Id" },
  { id: 28, text: "感情的な議論には簡単に動かされない。", axis: "T/F", target: "T" },
  { id: 29, text: "ギリギリのタイミングで最後にやっと何かを行うことが多い。", axis: "J/P", target: "P" },
  { id: 30, text: "倫理的なジレンマについて議論するのが好き。", axis: "N/S", target: "N" },
  { id: 31, text: "一人でいるより、人と一緒にいる方が好き。", axis: "E/I", target: "E" },
  { id: 32, text: "議論がとても理論的になると、退屈に感じたり興味を失ったりする。", axis: "N/S", target: "S" },
  { id: 33, text: "事実と感情が相反する場合、たいていは自分の心に従う。", axis: "T/F", target: "F" },
  { id: 34, text: "仕事や勉強のために一定のスケジュールを維持するのは難しいと感じる。", axis: "J/P", target: "P" },
  { id: 35, text: "一度決めたら、その決断を疑うことはほとんどない。", axis: "A/T", target: "A" },
  { id: 36, text: "友達は、自分を活発で社交的な人間だというだろう。", axis: "E/I", target: "E" },
  { id: 37, text: "文章を書くなど、さまざまな創造的表現に惹かれる。", axis: "N/S", target: "N" },
  { id: 38, text: "通常、感情的な印象よりも客観的な事実に基づいて物事を決める。", axis: "T/F", target: "T" },
  { id: 39, text: "1日ごとの「やることリスト」を作るのが好き。", axis: "J/P", target: "J" },
  { id: 40, text: "不安はほとんど感じない。", axis: "A/T", target: "A" },
  { id: 41, text: "電話はかけないようにしている。", axis: "E/I", target: "I" },
  { id: 42, text: "馴染みのないアイデアや視点の探求は楽しい。", axis: "N/S", target: "N" },
  { id: 43, text: "初対面でも、簡単に相手と理解し合うことができる。", axis: "E/I", target: "E" },
  { id: 44, text: "計画が途中で中断された場合、できるだけ早く再び軌道に乗せることが最も重要だ。", axis: "J/P", target: "J" },
  { id: 45, text: "ずっと前に自分がした間違いを、まだ気にしている。", axis: "A/T", target: "T-Id" },
  { id: 46, text: "将来の世界の様子についての理論的な議論には、あまり興味がない。", axis: "N/S", target: "S" },
  { id: 47, text: "あなたは感情をコントロールするのではなく、感情にコントロールされている。", axis: "A/T", target: "T-Id" },
  { id: 48, text: "意思決定をする際、最も論理的で効率的な方法よりも、当事者たちがどう感じるかを重視する。", axis: "T/F", target: "F" },
  { id: 49, text: "あなたの仕事のスタイルは「きちんと着実に努力」ではなく「自然発生するエネルギーの爆発の連続」に近い。", axis: "J/P", target: "P" },
  { id: 50, text: "誰かに高く評価されると、その人が自分に落胆するのにどれくらい時間がかかるか考えてしまう。", axis: "A/T", target: "T-Id" },
  { id: 51, text: "ほぼいつも単独で作業する仕事は魅力的だ。", axis: "E/I", target: "I" },
  { id: 52, text: "抽象的な哲学的問題についてじっくり考えるのは時間の無駄だと思う。", axis: "N/S", target: "S" },
  { id: 53, text: "静かな隠れ家のような場所より、人が沢山いて賑やかな雰囲気の方が好き。", axis: "E/I", target: "E" },
  { id: 54, text: "ある決断が自分にとって正しいと感じれば、それ以上の証拠を必要とせずに行動することが多い。", axis: "A/T", target: "A" },
  { id: 55, text: "精神的にいっぱいいっぱいだと、よく感じる。", axis: "A/T", target: "T-Id" },
  { id: 56, text: "ひとつも手順を省くことなく、順序を追って、念入りに物事を行う。", axis: "J/P", target: "J" },
  { id: 57, text: "明確な手順を踏まなければいけない仕事よりも、創造的な解決策を考える仕事を好む。", axis: "N/S", target: "N" },
  { id: 58, text: "意思決定をする際は、「論理的な推論」よりも「感情的な直感」に頼る傾向がある。", axis: "T/F", target: "F" },
  { id: 59, text: "締め切りを守るのが苦手。", axis: "J/P", target: "P" },
  { id: 60, text: "自分に関連する物事は、うまくいくだろうと自信がある。", axis: "A/T", target: "A" },
];

const axisConfigs = [
  { key: "energy", axis: "E/I", name: "エネルギー", left: "E", right: "I", leftLabel: "外向型", rightLabel: "内向型", color: "#459BB5", softColor: "#D8EEF4", scores: [42, 44, 47, 49, 53, 56, 58] },
  { key: "mind", axis: "N/S", name: "ものの見方", left: "N", right: "S", leftLabel: "直感型", rightLabel: "現実型", color: "#E9B43A", softColor: "#F8E9B6", scores: [42, 44, 47, 51, 53, 56, 58] },
  { key: "nature", axis: "T/F", name: "判断", left: "F", right: "T", leftLabel: "感情型", rightLabel: "思考型", color: "#34A873", softColor: "#CDECDC", scores: [47, 49, 53, 55, 58, 61, 63] },
  { key: "tactics", axis: "J/P", name: "戦術", left: "J", right: "P", leftLabel: "計画型", rightLabel: "探索型", color: "#8B62A5", softColor: "#E5D8EE", scores: [39, 42, 45, 47, 49, 53, 56] },
  { key: "identity", axis: "A/T", name: "アイデンティティ", left: "A", right: "T-Id", leftLabel: "自己主張型", rightLabel: "激動型", color: "#F25C62", softColor: "#FAD4D6", scores: [58, 56, 53, 49, 47, 44, 42] },
];

const answerOptions = [
  { value: -3, label: "強くそう思わない" },
  { value: -2, label: "そう思わない" },
  { value: -1, label: "ややそう思わない" },
  { value: 0, label: "どちらでもない" },
  { value: 1, label: "ややそう思う" },
  { value: 2, label: "そう思う" },
  { value: 3, label: "強くそう思う" },
];

const typeProfiles = {
  INTJ: { name: "建築家", group: "分析家", description: "長期的な構想を描き、仕組みを緻密に組み立てるタイプです。独自の視点と戦略性を活かし、複雑な課題を静かに前へ進めます。" },
  INTP: { name: "論理学者", group: "分析家", description: "知的好奇心が強く、物事の原理や矛盾を深く探るタイプです。自由な発想で仮説を立て、納得できる答えを追い求めます。" },
  ENTJ: { name: "指揮官", group: "分析家", description: "目標に向かって人や仕組みを動かす推進力があるタイプです。判断が速く、全体を見ながら大胆に計画を実行します。" },
  ENTP: { name: "討論者", group: "分析家", description: "新しい可能性を見つけ、議論や実験を通してアイデアを磨くタイプです。変化を楽しみ、常識にとらわれない発想を得意とします。" },
  INFJ: { name: "提唱者", group: "外交官", description: "理想や信念を大切にし、人の内面や未来の可能性を深く見つめるタイプです。静かな情熱で周囲に意味ある変化をもたらします。" },
  INFP: { name: "仲介者", group: "外交官", description: "価値観や共感を大切にし、自分らしさと人への思いやりを重視するタイプです。豊かな想像力で、心に響く選択を探します。" },
  ENFJ: { name: "主人公", group: "外交官", description: "人の成長やつながりを後押しする力があるタイプです。周囲の気持ちをくみ取りながら、チームを前向きな方向へ導きます。" },
  ENFP: { name: "運動家", group: "外交官", description: "人やアイデアとの出会いから刺激を受け、可能性を広げるタイプです。熱意と柔軟さで場を明るく動かします。" },
  ISTJ: { name: "管理者", group: "番人", description: "責任感が強く、事実と手順を重んじて着実に物事を進めるタイプです。安定した判断と継続力で信頼を積み上げます。" },
  ISFJ: { name: "擁護者", group: "番人", description: "周囲への気配りと実務的な支えを大切にするタイプです。目立たないところでも丁寧に役割を果たし、人を安心させます。" },
  ESTJ: { name: "幹部", group: "番人", description: "秩序や効率を重視し、現実的な判断で物事をまとめるタイプです。ルールや責任を明確にし、成果へ向けて進めます。" },
  ESFJ: { name: "領事", group: "番人", description: "人との調和や役に立つことを大切にするタイプです。周囲の状況に気づきやすく、温かく実践的にサポートします。" },
  ISTP: { name: "巨匠", group: "探検家", description: "観察力と実践力に優れ、手を動かしながら仕組みを理解するタイプです。冷静に状況を見極め、必要な行動を素早く取ります。" },
  ISFP: { name: "冒険家", group: "探検家", description: "感性と自由さを大切にし、その時々の体験を自分らしく味わうタイプです。静かな優しさと柔軟な行動力を持っています。" },
  ESTP: { name: "起業家", group: "探検家", description: "現場感覚と行動力があり、チャンスを見つけてすぐ動けるタイプです。変化に強く、人を巻き込みながら突破します。" },
  ESFP: { name: "エンターテイナー", group: "探検家", description: "人との時間や楽しい体験を大切にし、場を明るくするタイプです。感覚が鋭く、今この瞬間を活かすのが得意です。" },
};

const groupVisuals = {
  "分析家": { primary: "#6B5CA5", secondary: "#C8BFF0", accent: "#42A5B3" },
  "外交官": { primary: "#34A873", secondary: "#CDECDC", accent: "#E9B43A" },
  "番人": { primary: "#459BB5", secondary: "#D8EEF4", accent: "#8B62A5" },
  "探検家": { primary: "#E9B43A", secondary: "#F8E9B6", accent: "#F25C62" },
};

const answers = new Map();
let currentIndex = 0;

const questionScreen = document.querySelector("#questionScreen");
const resultScreen = document.querySelector("#resultScreen");
const currentNumber = document.querySelector("#currentNumber");
const progressFill = document.querySelector("#progressFill");
const questionNumber = document.querySelector("#questionNumber");
const questionText = document.querySelector("#questionText");
const answerGrid = document.querySelector("#answerGrid");
const traitList = document.querySelector("#traitList");
const typeMark = document.querySelector("#typeMark");
const typeName = document.querySelector("#typeName");
const typeJapaneseName = document.querySelector("#typeJapaneseName");
const typeGroup = document.querySelector("#typeGroup");
const typeCopy = document.querySelector("#typeCopy");
const typeDescription = document.querySelector("#typeDescription");
const typeIllustration = document.querySelector("#typeIllustration");
const prevButton = document.querySelector("#prevButton");
const clearButton = document.querySelector("#clearButton");
const restartButton = document.querySelector("#restartButton");
const showImageButton = document.querySelector("#showImageButton");
const copyStatus = document.querySelector("#copyStatus");
const sharePreview = document.querySelector("#sharePreview");
const shareImage = document.querySelector("#shareImage");
let latestShareData = null;
let latestShareUrl = null;

function interpolateScore(value, scores) {
  if (value <= -3) return scores[0];
  if (value >= 3) return scores[6];

  const low = Math.floor(value);
  const high = Math.ceil(value);
  const lowIndex = low + 3;
  const highIndex = high + 3;
  if (low === high) return scores[lowIndex];

  const ratio = value - low;
  return Math.round(scores[lowIndex] + (scores[highIndex] - scores[lowIndex]) * ratio);
}

function averageForAxis(axis) {
  const axisQuestions = questions.filter((question) => question.axis === axis);
  const total = axisQuestions.reduce((sum, question) => sum + (answers.get(question.id) ?? 0), 0);
  return total / axisQuestions.length;
}

function calculateResults() {
  return axisConfigs.map((config) => {
    const average = averageForAxis(config.axis);
    const leftScore = interpolateScore(average, config.scores);
    const rightScore = 100 - leftScore;
    const isLeft = leftScore >= 50;
    const trait = isLeft ? config.left : config.right;
    const label = isLeft ? config.leftLabel : config.rightLabel;
    const percent = isLeft ? leftScore : rightScore;

    return { ...config, average, leftScore, rightScore, trait, label, percent };
  });
}

function renderQuestion() {
  const question = questions[currentIndex];
  const selectedValue = answers.get(question.id);
  const progress = (currentIndex / questions.length) * 100;

  currentNumber.textContent = String(currentIndex + 1);
  progressFill.style.width = `${progress}%`;
  questionNumber.textContent = String(question.id);
  questionText.textContent = question.text;
  prevButton.disabled = currentIndex === 0;

  answerGrid.innerHTML = answerOptions
    .map((option) => {
      const selected = option.value === selectedValue ? " is-selected" : "";
      return `
        <button class="answer-option${selected}" type="button" data-value="${option.value}" aria-pressed="${selected ? "true" : "false"}">
          <span class="answer-label">${option.label}</span>
        </button>
      `;
    })
    .join("");
}

function renderResults() {
  const results = calculateResults();
  const fourLetterType = `${results[0].trait}${results[1].trait}${results[2].trait}${results[3].trait}`;
  const typeCode = `${fourLetterType}-${results[4].trait === "A" ? "A" : "T"}`;
  const profile = typeProfiles[fourLetterType];
  const copy = results.map((result) => result.label).join(" / ");

  typeMark.textContent = typeCode;
  typeName.textContent = typeCode;
  typeJapaneseName.textContent = profile.name;
  typeGroup.textContent = `4グループ: ${profile.group}`;
  typeCopy.textContent = copy;
  typeDescription.textContent = profile.description;
  typeIllustration.innerHTML = createGroupIllustration(profile.group);
  latestShareData = { typeCode, fourLetterType, profile, copy, results };

  traitList.innerHTML = results
    .map((result) => {
      return `
        <div class="trait-row" style="--trait-color: ${result.color}; --trait-soft-color: ${result.softColor}; --left-score: ${result.leftScore}%;">
          <div class="trait-title">
            <strong>${result.name}</strong>
            <span class="trait-score">${result.percent}% ${result.label}</span>
          </div>
          <div class="trait-bar" aria-label="${result.name}: ${result.percent}% ${result.label}">
            <div class="trait-fill"></div>
            <div class="trait-dot"></div>
          </div>
          <div class="trait-labels">
            <span>${result.leftLabel}</span>
            <span>${result.rightLabel}</span>
          </div>
        </div>
      `;
    })
    .join("");
}

function createGroupIllustration(group) {
  const colors = groupVisuals[group];
  return `
    <svg viewBox="0 0 180 150" role="img" focusable="false">
      <rect x="18" y="102" width="144" height="20" rx="10" fill="${colors.secondary}"/>
      <circle cx="90" cy="58" r="34" fill="${colors.secondary}"/>
      <path d="M58 105 L90 28 L122 105 Z" fill="${colors.primary}" opacity="0.96"/>
      <rect x="73" y="72" width="34" height="48" rx="8" fill="#fff" opacity="0.9"/>
      <circle cx="90" cy="62" r="13" fill="#293241"/>
      <path d="M48 93 C61 74 72 73 84 91" fill="none" stroke="${colors.accent}" stroke-width="8" stroke-linecap="round"/>
      <path d="M96 91 C111 73 126 76 137 96" fill="none" stroke="${colors.accent}" stroke-width="8" stroke-linecap="round"/>
      <circle cx="45" cy="96" r="9" fill="${colors.primary}"/>
      <circle cx="138" cy="98" r="9" fill="${colors.primary}"/>
      <path d="M67 31 L90 14 L113 31" fill="none" stroke="${colors.accent}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxLines = Infinity) {
  const words = Array.from(text);
  const lines = [];
  let line = "";

  words.forEach((char) => {
    const testLine = line + char;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      lines.push(line);
      line = char;
    } else {
      line = testLine;
    }
  });
  if (line) lines.push(line);

  lines.slice(0, maxLines).forEach((item, index) => {
    ctx.fillText(item, x, y + index * lineHeight);
  });

  return y + Math.min(lines.length, maxLines) * lineHeight;
}

function roundRectPath(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function drawShareIllustration(ctx, group, x, y, scale = 1) {
  const colors = groupVisuals[group];
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  ctx.fillStyle = colors.secondary;
  roundRectPath(ctx, 0, 104, 210, 28, 14);
  ctx.fill();

  ctx.fillStyle = colors.secondary;
  ctx.beginPath();
  ctx.arc(105, 60, 44, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = colors.primary;
  ctx.globalAlpha = 0.96;
  ctx.beginPath();
  ctx.moveTo(64, 116);
  ctx.lineTo(105, 16);
  ctx.lineTo(146, 116);
  ctx.closePath();
  ctx.fill();
  ctx.globalAlpha = 1;

  ctx.fillStyle = "#ffffff";
  roundRectPath(ctx, 84, 76, 42, 56, 10);
  ctx.fill();

  ctx.fillStyle = "#293241";
  ctx.beginPath();
  ctx.arc(105, 64, 16, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = colors.accent;
  ctx.lineWidth = 9;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(52, 100);
  ctx.bezierCurveTo(68, 78, 84, 80, 99, 99);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(112, 99);
  ctx.bezierCurveTo(130, 78, 151, 82, 164, 106);
  ctx.stroke();

  ctx.fillStyle = colors.primary;
  ctx.beginPath();
  ctx.arc(48, 104, 11, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(168, 106, 11, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = colors.accent;
  ctx.lineWidth = 7;
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(78, 34);
  ctx.lineTo(105, 14);
  ctx.lineTo(132, 34);
  ctx.stroke();

  ctx.restore();
}

function makeShareCanvas() {
  const data = latestShareData;
  const canvas = document.createElement("canvas");
  canvas.width = 1400;
  canvas.height = 1400;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#f6f7f9";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";
  roundRectPath(ctx, 70, 70, 1260, 1260, 34);
  ctx.fill();

  ctx.fillStyle = "#293241";
  ctx.font = "800 34px -apple-system, BlinkMacSystemFont, sans-serif";
  ctx.fillText("16鑑定 結果", 130, 150);

  ctx.fillStyle = "#293241";
  ctx.font = "900 86px -apple-system, BlinkMacSystemFont, sans-serif";
  ctx.fillText(data.typeCode, 130, 255);

  drawShareIllustration(ctx, data.profile.group, 1010, 135, 1.2);

  ctx.font = "850 46px -apple-system, BlinkMacSystemFont, sans-serif";
  ctx.fillText(data.profile.name, 130, 325);

  ctx.fillStyle = "#ffffff";
  roundRectPath(ctx, 130, 354, 220, 52, 26);
  ctx.fill();
  ctx.strokeStyle = "#d9dee7";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = "#667085";
  ctx.font = "800 24px -apple-system, BlinkMacSystemFont, sans-serif";
  ctx.fillText(data.profile.group, 165, 389);

  ctx.fillStyle = "#667085";
  ctx.font = "700 27px -apple-system, BlinkMacSystemFont, sans-serif";
  wrapCanvasText(ctx, data.profile.description, 130, 465, 1140, 42, 4);

  let y = 650;
  data.results.forEach((result) => {
    ctx.fillStyle = "#293241";
    ctx.font = "850 26px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText(result.name, 130, y);

    ctx.fillStyle = result.color;
    ctx.font = "900 31px -apple-system, BlinkMacSystemFont, sans-serif";
    const scoreText = `${result.percent}% ${result.label}`;
    const scoreWidth = ctx.measureText(scoreText).width;
    ctx.fillText(scoreText, 1270 - scoreWidth, y);

    const barX = 130;
    const barY = y + 28;
    const barW = 1140;
    const barH = 24;
    ctx.fillStyle = result.softColor;
    roundRectPath(ctx, barX, barY, barW, barH, 12);
    ctx.fill();
    ctx.fillStyle = result.color;
    roundRectPath(ctx, barX, barY, (barW * result.leftScore) / 100, barH, 12);
    ctx.fill();
    ctx.fillStyle = "#293241";
    ctx.font = "700 19px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText(result.leftLabel, barX, barY + 50);
    const rightWidth = ctx.measureText(result.rightLabel).width;
    ctx.fillText(result.rightLabel, barX + barW - rightWidth, barY + 50);
    y += 132;
  });
  return canvas;
}

async function showResultImage() {
  copyStatus.textContent = "画像を作成中...";
  const canvas = makeShareCanvas();
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  if (!blob) {
    copyStatus.textContent = "画像作成に失敗しました";
    return;
  }

  if (latestShareUrl) URL.revokeObjectURL(latestShareUrl);
  latestShareUrl = URL.createObjectURL(blob);
  shareImage.src = latestShareUrl;
  sharePreview.classList.remove("is-hidden");
  copyStatus.textContent = "画像を表示しました";
  sharePreview.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function showQuestionScreen() {
  resultScreen.classList.add("is-hidden");
  questionScreen.classList.remove("is-hidden");
  renderQuestion();
}

function showResultScreen() {
  progressFill.style.width = "100%";
  renderResults();
  questionScreen.classList.add("is-hidden");
  resultScreen.classList.remove("is-hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setAnswer(value) {
  const question = questions[currentIndex];
  answers.set(question.id, value);

  if (currentIndex === questions.length - 1) {
    showResultScreen();
    return;
  }

  currentIndex += 1;
  renderQuestion();
}

function resetFlow() {
  answers.clear();
  currentIndex = 0;
  sharePreview.classList.add("is-hidden");
  shareImage.removeAttribute("src");
  copyStatus.textContent = "";
  if (latestShareUrl) {
    URL.revokeObjectURL(latestShareUrl);
    latestShareUrl = null;
  }
  showQuestionScreen();
}

answerGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-value]");
  if (!button) return;
  setAnswer(Number(button.dataset.value));
});

prevButton.addEventListener("click", () => {
  if (currentIndex === 0) return;
  currentIndex -= 1;
  renderQuestion();
});

clearButton.addEventListener("click", resetFlow);
restartButton.addEventListener("click", resetFlow);
showImageButton.addEventListener("click", showResultImage);

renderQuestion();
