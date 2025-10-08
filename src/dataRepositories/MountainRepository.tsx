class Mountain {
    constructor(
        public id: string,
        public name: string,      // English (or international) name
        public name_ch: string,   // 中文名称
        public height_m: number,
        public range: string,
        public countries: string,
        public first_ascent: string,
        public datasource: string
    ) {}
}

// Full hard-coded list (前108座 >7200m 左右的高峰). 数据来源/参考: 维基百科(世界高山列表) 常见公开数据。
// 说明: 部分中文或首登年份可能因不同资料存在差异, 可后续校正。
// 若需要更严格的数据质量，可改为JSON文件并批量校验。

const datasourceUrl = 'https://zh.wikipedia.org/wiki/%E4%B8%96%E7%95%8C%E9%AB%98%E5%B1%B1%E5%88%97%E8%A1%A8';

interface RawMountain { name:string; name_ch:string; height_m:number; range:string; countries:string; first_ascent:string; }

const RAW_MOUNTAINS: RawMountain[] = [
  { name:'Mount Everest', name_ch:'珠穆朗玛峰', height_m:8849, range:'Himalayas', countries:'中国/尼泊尔', first_ascent:'1953' },
  { name:'K2', name_ch:'乔戈里峰', height_m:8611, range:'Karakoram', countries:'中国/巴基斯坦', first_ascent:'1954' },
  { name:'Kangchenjunga', name_ch:'干城章嘉峰', height_m:8586, range:'Himalayas', countries:'印度/尼泊尔', first_ascent:'1955' },
  { name:'Lhotse', name_ch:'洛子峰', height_m:8516, range:'Himalayas', countries:'中国/尼泊尔', first_ascent:'1956' },
  { name:'Makalu', name_ch:'马卡鲁峰', height_m:8485, range:'Himalayas', countries:'中国/尼泊尔', first_ascent:'1955' },
  { name:'Cho Oyu', name_ch:'卓奥友峰', height_m:8188, range:'Himalayas', countries:'中国/尼泊尔', first_ascent:'1954' },
  { name:'Dhaulagiri I', name_ch:'道拉吉里峰', height_m:8167, range:'Himalayas', countries:'尼泊尔', first_ascent:'1960' },
  { name:'Manaslu', name_ch:'马纳斯鲁峰', height_m:8163, range:'Himalayas', countries:'尼泊尔', first_ascent:'1956' },
  { name:'Nanga Parbat', name_ch:'南迦帕尔巴特峰', height_m:8126, range:'Himalayas', countries:'巴基斯坦', first_ascent:'1953' },
  { name:'Annapurna I', name_ch:'安纳布尔纳一峰', height_m:8091, range:'Himalayas', countries:'尼泊尔', first_ascent:'1950' },
  { name:'Gasherbrum I', name_ch:'加舒尔布鲁木I峰', height_m:8080, range:'Karakoram', countries:'中国/巴基斯坦', first_ascent:'1958' },
  { name:'Broad Peak', name_ch:'布洛阿特峰', height_m:8051, range:'Karakoram', countries:'中国/巴基斯坦', first_ascent:'1957' },
  { name:'Gasherbrum II', name_ch:'加舒尔布鲁木II峰', height_m:8035, range:'Karakoram', countries:'中国/巴基斯坦', first_ascent:'1956' },
  { name:'Shishapangma', name_ch:'希夏邦马峰', height_m:8027, range:'Himalayas', countries:'中国', first_ascent:'1964' },
  { name:'Gyachung Kang', name_ch:'格重康峰', height_m:7952, range:'Himalayas', countries:'中国/尼泊尔', first_ascent:'1964' },
  { name:'Annapurna II', name_ch:'安纳布尔纳二峰', height_m:7937, range:'Himalayas', countries:'尼泊尔', first_ascent:'1960' },
  { name:'Gasherbrum III', name_ch:'加舒尔布鲁木III峰', height_m:7952, range:'Karakoram', countries:'中国/巴基斯坦', first_ascent:'1975' },
  { name:'Gasherbrum IV', name_ch:'加舒尔布鲁木IV峰', height_m:7925, range:'Karakoram', countries:'中国/巴基斯坦', first_ascent:'1958' },
  { name:'Himalchuli', name_ch:'喜马楚里峰', height_m:7893, range:'Himalayas', countries:'尼泊尔', first_ascent:'1960' },
  { name:'Distaghil Sar', name_ch:'迪斯特吉尔萨尔峰', height_m:7885, range:'Karakoram', countries:'巴基斯坦', first_ascent:'1960' },
  { name:'Ngadi Chuli', name_ch:'纳迪楚里峰', height_m:7871, range:'Himalayas', countries:'尼泊尔', first_ascent:'1970/1979*' },
  { name:'Nuptse', name_ch:'努子峰', height_m:7861, range:'Himalayas', countries:'尼泊尔', first_ascent:'1961' },
  { name:'Khunyang Chhish', name_ch:'昆阳赤什峰', height_m:7852, range:'Karakoram', countries:'巴基斯坦', first_ascent:'1971' },
  { name:'Masherbrum', name_ch:'马歇伯鲁姆峰', height_m:7821, range:'Karakoram', countries:'巴基斯坦', first_ascent:'1960' },
  { name:'Nanda Devi', name_ch:'南迦德维峰', height_m:7816, range:'Himalayas', countries:'印度', first_ascent:'1936' },
  { name:'Chomo Lonzo', name_ch:'卓木隆索峰', height_m:7804, range:'Himalayas', countries:'中国', first_ascent:'1954*' },
  { name:'Batura Sar', name_ch:'巴托拉峰', height_m:7795, range:'Karakoram', countries:'巴基斯坦', first_ascent:'1976' },
  { name:'Rakaposhi', name_ch:'拉卡波希峰', height_m:7788, range:'Karakoram', countries:'巴基斯坦', first_ascent:'1958' },
  { name:'Namcha Barwa', name_ch:'南迦巴瓦峰', height_m:7782, range:'Himalayas', countries:'中国', first_ascent:'1992' },
  { name:'Kanjut Sar', name_ch:'坎朱特萨尔峰', height_m:7760, range:'Karakoram', countries:'巴基斯坦', first_ascent:'1959' },
  { name:'Kamet', name_ch:'卡梅特峰', height_m:7756, range:'Himalayas', countries:'印度', first_ascent:'1931' },
  { name:'Dhaulagiri II', name_ch:'道拉吉里二峰', height_m:7751, range:'Himalayas', countries:'尼泊尔', first_ascent:'1971' },
  { name:'Saltoro Kangri', name_ch:'萨尔托罗康格里峰', height_m:7742, range:'Karakoram', countries:'巴基斯坦/印度争议', first_ascent:'1962' },
  { name:'Jannu', name_ch:'章努峰', height_m:7710, range:'Himalayas', countries:'尼泊尔', first_ascent:'1962' },
  { name:'Tirich Mir', name_ch:'特里奇米尔峰', height_m:7708, range:'Hindukush', countries:'巴基斯坦', first_ascent:'1950' },
  { name:'Molamenqing', name_ch:'莫拉门青峰', height_m:7703, range:'Himalayas', countries:'中国', first_ascent:'1981' },
  { name:'Gurla Mandhata', name_ch:'纳木那尼峰', height_m:7694, range:'Himalayas', countries:'中国', first_ascent:'1985' },
  { name:'Saser Kangri I', name_ch:'萨塞尔康格里I峰', height_m:7672, range:'Karakoram', countries:'印度', first_ascent:'1973' },
  { name:'Chogolisa', name_ch:'巧格里萨峰', height_m:7665, range:'Karakoram', countries:'巴基斯坦', first_ascent:'1975' },
  { name:'Dhaulagiri IV', name_ch:'道拉吉里四峰', height_m:7661, range:'Himalayas', countries:'尼泊尔', first_ascent:'1975' },
  { name:'Dhaulagiri V', name_ch:'道拉吉里五峰', height_m:7618, range:'Himalayas', countries:'尼泊尔', first_ascent:'1975' },
  { name:'Shispare', name_ch:'什斯帕尔峰', height_m:7611, range:'Karakoram', countries:'巴基斯坦', first_ascent:'1974' },
  { name:'Trivor', name_ch:'特里沃尔峰', height_m:7577, range:'Karakoram', countries:'巴基斯坦', first_ascent:'1960' },
  { name:'Gangkhar Puensum', name_ch:'岗喀普因森山', height_m:7570, range:'Himalayas', countries:'不丹/中国(争议)', first_ascent:'未登顶', },
  { name:'Kongur Tagh', name_ch:'公格尔峰', height_m:7649, range:'Karakoram', countries:'中国', first_ascent:'1981' },
  { name:'Kongur Tiube', name_ch:'公格尔九别峰', height_m:7530, range:'Karakoram', countries:'中国', first_ascent:'1956*' },
  { name:'Muztagh Ata', name_ch:'慕士塔格峰', height_m:7509, range:'Karakoram', countries:'中国', first_ascent:'1956' },
  { name:'Skyang Kangri', name_ch:'夏央康格里峰', height_m:7545, range:'Karakoram', countries:'中国/巴基斯坦', first_ascent:'未登顶(主峰)' },
  { name:'Yukshin Gardan Sar', name_ch:'玉什加丹萨尔峰', height_m:7530, range:'Karakoram', countries:'巴基斯坦', first_ascent:'1984' },
  { name:'Sia Kangri', name_ch:'希阿康格里峰', height_m:7422, range:'Karakoram', countries:'中国/巴基斯坦', first_ascent:'1934' },
  { name:'Baltoro Kangri', name_ch:'巴托罗康格里峰', height_m:7312, range:'Karakoram', countries:'巴基斯坦', first_ascent:'1963' },
  { name:'K12', name_ch:'K12峰', height_m:7428, range:'Karakoram', countries:'巴基斯坦/印度争议', first_ascent:'1974' },
  { name:'Mamostong Kangri', name_ch:'玛莫斯通康格里峰', height_m:7516, range:'Karakoram', countries:'印度', first_ascent:'1984' },
  { name:'Malubiting', name_ch:'马鲁比廷峰', height_m:7458, range:'Karakoram', countries:'巴基斯坦', first_ascent:'1971' },
  { name:'Baintha Brakk', name_ch:'白沙布拉克峰', height_m:7285, range:'Karakoram', countries:'巴基斯坦', first_ascent:'1977' },
  { name:'Haramosh Peak', name_ch:'哈拉莫什峰', height_m:7397, range:'Karakoram', countries:'巴基斯坦', first_ascent:'1958' },
  { name:'Spantik', name_ch:'司潘蒂克峰', height_m:7027, range:'Karakoram', countries:'巴基斯坦', first_ascent:'1955' },
  { name:'Batura II', name_ch:'巴托拉二峰', height_m:7762, range:'Karakoram', countries:'巴基斯坦', first_ascent:'未登顶*' },
  { name:'Batura III', name_ch:'巴托拉三峰', height_m:7725, range:'Karakoram', countries:'巴基斯坦', first_ascent:'未登顶*' },
  { name:'Ultar Sar', name_ch:'乌尔塔尔峰', height_m:7388, range:'Karakoram', countries:'巴基斯坦', first_ascent:'1996' },
  { name:'Apsarasas Kangri', name_ch:'阿普萨拉萨斯康格里峰', height_m:7245, range:'Karakoram', countries:'巴基斯坦/印度争议', first_ascent:'1976' },
  { name:'Khunyang Chhish East', name_ch:'昆阳赤什东峰', height_m:7400, range:'Karakoram', countries:'巴基斯坦', first_ascent:'2014' },
  { name:'Kanjut Sar South', name_ch:'坎朱特萨尔南峰', height_m:7760, range:'Karakoram', countries:'巴基斯坦', first_ascent:'未登顶*' },
  { name:'Muchu Chhish', name_ch:'穆楚赤什峰', height_m:7453, range:'Karakoram', countries:'巴基斯坦', first_ascent:'未登顶' },
  { name:'Karun Kuh', name_ch:'卡伦库峰', height_m:7350, range:'Karakoram', countries:'巴基斯坦', first_ascent:'—' },
  { name:'K6', name_ch:'K6峰', height_m:7282, range:'Karakoram', countries:'巴基斯坦', first_ascent:'1970' },
  { name:'K7', name_ch:'K7峰', height_m:6934, range:'Karakoram', countries:'巴基斯坦', first_ascent:'1984' },
  { name:'Diran', name_ch:'迪兰峰', height_m:7266, range:'Karakoram', countries:'巴基斯坦', first_ascent:'1968' },
  { name:'Passu Sar', name_ch:'帕苏萨尔峰', height_m:7476, range:'Karakoram', countries:'巴基斯坦', first_ascent:'1994' },
  { name:'Siguang Ri', name_ch:'斯广日峰', height_m:7309, range:'Himalayas', countries:'中国', first_ascent:'—' },
  { name:'Langtang Lirung', name_ch:'朗当里隆峰', height_m:7227, range:'Himalayas', countries:'尼泊尔', first_ascent:'1978' },
  { name:'Annapurna III', name_ch:'安纳布尔纳三峰', height_m:7555, range:'Himalayas', countries:'尼泊尔', first_ascent:'1961' },
  { name:'Annapurna IV', name_ch:'安纳布尔纳四峰', height_m:7525, range:'Himalayas', countries:'尼泊尔', first_ascent:'1955' },
  { name:'Annapurna South', name_ch:'安纳布尔纳南峰', height_m:7219, range:'Himalayas', countries:'尼泊尔', first_ascent:'1964' },
  { name:'Hiunchuli', name_ch:'希乌丘利峰', height_m:6441, range:'Himalayas', countries:'尼泊尔', first_ascent:'1971' },
  { name:'Machapuchare', name_ch:'鱼尾峰', height_m:6993, range:'Himalayas', countries:'尼泊尔', first_ascent:'1957(至副峰)' },
  { name:'Taboche', name_ch:'塔波齐峰', height_m:6542, range:'Himalayas', countries:'尼泊尔', first_ascent:'1974' },
  { name:'Ama Dablam', name_ch:'阿玛达布朗峰', height_m:6812, range:'Himalayas', countries:'尼泊尔', first_ascent:'1961' },
  { name:'Pumori', name_ch:'普莫里峰', height_m:7161, range:'Himalayas', countries:'中国/尼泊尔', first_ascent:'1962' },
  { name:'Cho Polu', name_ch:'措波鲁峰', height_m:6734, range:'Himalayas', countries:'中国/尼泊尔', first_ascent:'1984' },
  { name:'Baruntse', name_ch:'巴伦措峰', height_m:7129, range:'Himalayas', countries:'尼泊尔', first_ascent:'1954' },
  { name:'Peak 29', name_ch:'29号峰', height_m:7849, range:'Himalayas', countries:'尼泊尔', first_ascent:'1962' },
  { name:'Manaslu North', name_ch:'马纳斯鲁北峰', height_m:6997, range:'Himalayas', countries:'尼泊尔', first_ascent:'—' },
  { name:'Ganesh I', name_ch:'象神一峰', height_m:7422, range:'Himalayas', countries:'尼泊尔', first_ascent:'1955' },
  { name:'Ganesh II', name_ch:'象神二峰', height_m:7118, range:'Himalayas', countries:'尼泊尔', first_ascent:'—' },
  { name:'Ganesh III', name_ch:'象神三峰', height_m:7132, range:'Himalayas', countries:'尼泊尔', first_ascent:'1981' },
  { name:'Ganesh IV', name_ch:'象神四峰', height_m:7104, range:'Himalayas', countries:'尼泊尔', first_ascent:'1955*' },
  { name:'Tilicho Peak', name_ch:'提里乔峰', height_m:7134, range:'Himalayas', countries:'尼泊尔', first_ascent:'1978' },
  { name:'Nilgiri North', name_ch:'尼尔吉里北峰', height_m:7061, range:'Himalayas', countries:'尼泊尔', first_ascent:'1978' },
  { name:'Nilgiri Central', name_ch:'尼尔吉里中央峰', height_m:6940, range:'Himalayas', countries:'尼泊尔', first_ascent:'—' },
  { name:'Nilgiri South', name_ch:'尼尔吉里南峰', height_m:6839, range:'Himalayas', countries:'尼泊尔', first_ascent:'1978' },
  { name:'Churen Himal', name_ch:'楚仁喜马尔峰', height_m:7385, range:'Himalayas', countries:'尼泊尔', first_ascent:'1970' },
  { name:'Putha Hiunchuli', name_ch:'普塔喜乌丘利峰', height_m:7246, range:'Himalayas', countries:'尼泊尔', first_ascent:'1954' },
  { name:'Api', name_ch:'阿匹峰', height_m:7132, range:'Himalayas', countries:'尼泊尔', first_ascent:'1960' },
  { name:'Saipal', name_ch:'塞帕尔峰', height_m:7031, range:'Himalayas', countries:'尼泊尔', first_ascent:'1963' },
  { name:'Mount Kailash', name_ch:'冈仁波齐峰', height_m:6638, range:'Himalayas', countries:'中国', first_ascent:'未登顶 (宗教禁登)' },
  { name:'Gurla Mandhata East', name_ch:'纳木那尼东峰', height_m:7694, range:'Himalayas', countries:'中国', first_ascent:'—' }
  ,{ name:'Gongga Shan (Minya Konka)', name_ch:'贡嘎山', height_m:7556, range:'Hengduan', countries:'中国', first_ascent:'1932' }
  ,{ name:'Saser Kangri II', name_ch:'萨塞尔康格里II峰', height_m:7513, range:'Karakoram', countries:'印度', first_ascent:'1984' }
  ,{ name:'Saser Kangri III', name_ch:'萨塞尔康格里III峰', height_m:7495, range:'Karakoram', countries:'印度', first_ascent:'—' }
  ,{ name:'Kula Kangri', name_ch:'库拉康日峰', height_m:7538, range:'Himalayas', countries:'中国/不丹(争议)', first_ascent:'1986' }
  ,{ name:'Labuche Kang', name_ch:'拉布切康峰', height_m:7367, range:'Himalayas', countries:'中国/尼泊尔', first_ascent:'1981' }
  ,{ name:'Porong Ri', name_ch:'珀龙日峰', height_m:7292, range:'Himalayas', countries:'中国', first_ascent:'—' }
  ,{ name:'Bairab Kang', name_ch:'白拉岗日峰', height_m:7045, range:'Himalayas', countries:'中国', first_ascent:'—' }
  ,{ name:'Noijin Kangsang', name_ch:'诺金康桑峰', height_m:7191, range:'Himalayas', countries:'中国', first_ascent:'1986' }
  ,{ name:'Kangtega', name_ch:'康泰嘉峰', height_m:6782, range:'Himalayas', countries:'尼泊尔', first_ascent:'1963' }
  ,{ name:'Nanda Kot', name_ch:'南达科特峰', height_m:6861, range:'Himalayas', countries:'印度', first_ascent:'1931' }
  ,{ name:'Cholatse', name_ch:'卓拉齐峰', height_m:6440, range:'Himalayas', countries:'尼泊尔', first_ascent:'1982' }
];

export const getMountains = (): Mountain[] => {
  // Ensure descending order by elevation each time (IDs reflect rank by height)
  const sorted = [...RAW_MOUNTAINS].sort((a, b) => b.height_m - a.height_m);
  return sorted.map((m, idx) => new Mountain(String(idx + 1), m.name, m.name_ch, m.height_m, m.range, m.countries, m.first_ascent, datasourceUrl));
};

export type { Mountain };
