// Enhanced Bible Quiz JavaScript
// Original questions based on general Biblical knowledge

const quizData = {
    oldTestament: [
        {
            question: "Who lived the longest on earth according to the Bible?",
            options: ["Adam", "Methuselah", "Enoch", "Seth"],
            correct: 1,
            difficulty: "easy",
            reference: "Genesis 5:27",
            explanation: "Methuselah lived 969 years, making him the longest-lived person in the Bible."
        },
        {
            question: "On what mountain did Noah's ark come to rest after the flood?",
            options: ["Mount Sinai", "Mount Nebo", "Mount Ararat", "Mount Hermon"],
            correct: 2,
            difficulty: "average",
            reference: "Genesis 8:4",
            explanation: "The ark came to rest on the mountains of Ararat when the flood waters subsided."
        },
        {
            question: "Which angel did God station at the entrance of Eden?",
            options: ["Cherubim", "Seraphim", "Guardian angels", "Archangels"],
            correct: 0,
            difficulty: "average",
            reference: "Genesis 3:24",
            explanation: "God placed the Cherubim and a flaming sword at the east of Eden to guard the way to the tree of life."
        },
        {
            question: "What is the nationality of Hagar, Sarah's slave?",
            options: ["Canaanite", "Hebrew", "Egyptian", "Aramean"],
            correct: 2,
            difficulty: "average",
            reference: "Genesis 16:1",
            explanation: "Hagar was an Egyptian slave who belonged to Sarah, Abraham's wife."
        },
        {
            question: "Which biblical figure's name means 'laughter'?",
            options: ["Ishmael", "Isaac", "Jacob", "Joseph"],
            correct: 1,
            difficulty: "easy",
            reference: "Genesis 21:3",
            explanation: "Isaac's name means laughter, given because Sarah laughed when told she would bear a child in her old age."
        },
        {
            question: "What was the tenth plague in Egypt?",
            options: ["Darkness", "Death of the firstborn", "Water turned to blood", "Locusts"],
            correct: 1,
            difficulty: "easy",
            reference: "Exodus 11:5",
            explanation: "The death of the firstborn was the final plague that convinced Pharaoh to let the Israelites go."
        },
        {
            question: "What is the other name for Mount Sinai?",
            options: ["Mount Carmel", "Mount Zion", "Mount Hermon", "Mount Horeb"],
            correct: 3,
            difficulty: "average",
            reference: "Exodus 3:1",
            explanation: "Mount Sinai is also known as Mount Horeb, where God gave Moses the Ten Commandments."
        },
        {
            question: "From which tribe did the priests who ministered to the Lord come?",
            options: ["Judah", "Joseph", "Benjamin", "Levi"],
            correct: 3,
            difficulty: "easy",
            reference: "Numbers 1:50",
            explanation: "The Levites were chosen as the priestly tribe to serve in the tabernacle and temple."
        },
        {
            question: "Who was the wealthy Israelite from Bethlehem who married Ruth?",
            options: ["Boaz", "Elimelech", "Obed", "Jesse"],
            correct: 0,
            difficulty: "easy",
            reference: "Ruth 2:1",
            explanation: "Boaz was a relative of Naomi who showed kindness to Ruth and eventually married her."
        },
        {
            question: "Who said 'Am I my brother's keeper'?",
            options: ["Abel", "Cain", "Seth", "Adam"],
            correct: 1,
            difficulty: "easy",
            reference: "Genesis 4:9",
            explanation: "Cain said this to God when asked about Abel after murdering him."
        },
        {
            question: "How many sons of Noah survived the flood?",
            options: ["Two", "Three", "Four", "Five"],
            correct: 1,
            difficulty: "average",
            reference: "Genesis 9:18",
            explanation: "Noah's three sons - Shem, Ham, and Japheth - survived the flood with him."
        },
        {
            question: "Who was sold into slavery by his brothers?",
            options: ["Benjamin", "Joseph", "Reuben", "Simeon"],
            correct: 1,
            difficulty: "easy",
            reference: "Genesis 37:28",
            explanation: "Joseph was sold by his jealous brothers to Midianite merchants who took him to Egypt."
        },
        {
            question: "What was the last book of the Old Testament in the Catholic canon?",
            options: ["Daniel", "Malachi", "Zechariah", "Haggai"],
            correct: 1,
            difficulty: "average",
            reference: "Catholic Bible",
            explanation: "Malachi is the last book of the Old Testament in the Catholic canon."
        },
        {
            question: "Who was swallowed by a great fish?",
            options: ["Elijah", "Elisha", "Jonah", "Jeremiah"],
            correct: 2,
            difficulty: "easy",
            reference: "Jonah 1:17",
            explanation: "Jonah was swallowed by a great fish for three days after trying to flee from God's command."
        },
        {
            question: "Who interpreted Pharaoh's dreams?",
            options: ["Moses", "Joseph", "Daniel", "Aaron"],
            correct: 1,
            difficulty: "easy",
            reference: "Genesis 41:15",
            explanation: "Joseph interpreted Pharaoh's dreams about seven years of plenty followed by seven years of famine."
        }
    ],
    
    prophets: [
        {
            question: "Who prophesied that a virgin would conceive and bear a son called Emmanuel?",
            options: ["Jeremiah", "Isaiah", "Ezekiel", "Daniel"],
            correct: 1,
            difficulty: "average",
            reference: "Isaiah 7:14",
            explanation: "Isaiah prophesied about the virgin birth, which was fulfilled in Jesus Christ."
        },
        {
            question: "Which prophet was taken up to heaven in a whirlwind?",
            options: ["Elijah", "Elisha", "Enoch", "Moses"],
            correct: 0,
            difficulty: "easy",
            reference: "2 Kings 2:11",
            explanation: "Elijah was taken up to heaven in a chariot of fire with a whirlwind."
        },
        {
            question: "Which prophet challenged the prophets of Baal on Mount Carmel?",
            options: ["Elijah", "Elisha", "Samuel", "Nathan"],
            correct: 0,
            difficulty: "easy",
            reference: "1 Kings 18:19-40",
            explanation: "Elijah challenged 450 prophets of Baal to prove whose God was real."
        },
        {
            question: "Which prophet was thrown into a lions' den?",
            options: ["Jeremiah", "Ezekiel", "Daniel", "Isaiah"],
            correct: 2,
            difficulty: "easy",
            reference: "Daniel 6:16",
            explanation: "Daniel was thrown into the lions' den for praying to God, but was protected by an angel."
        },
        {
            question: "Which prophet saw a vision of dry bones coming to life?",
            options: ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"],
            correct: 2,
            difficulty: "average",
            reference: "Ezekiel 37:1-14",
            explanation: "Ezekiel saw a vision of dry bones representing Israel's restoration."
        },
        {
            question: "Which prophet was called by God while still a boy in the temple?",
            options: ["Samuel", "Isaiah", "Jeremiah", "Daniel"],
            correct: 0,
            difficulty: "easy",
            reference: "1 Samuel 3:4",
            explanation: "Samuel heard God calling him as a boy serving in the temple under Eli."
        },
        {
            question: "Which prophet married a prostitute as a symbol of God's love for Israel?",
            options: ["Amos", "Hosea", "Joel", "Micah"],
            correct: 1,
            difficulty: "average",
            reference: "Hosea 1:2",
            explanation: "God commanded Hosea to marry Gomer to symbolize God's faithful love for unfaithful Israel."
        },
        {
            question: "Which prophet was lowered into a cistern and left to die?",
            options: ["Isaiah", "Jeremiah", "Ezekiel", "Amos"],
            correct: 1,
            difficulty: "average",
            reference: "Jeremiah 38:6",
            explanation: "Jeremiah was thrown into a muddy cistern for prophesying Jerusalem's fall."
        },
        {
            question: "Which prophet anointed David as king?",
            options: ["Samuel", "Nathan", "Gad", "Elijah"],
            correct: 0,
            difficulty: "easy",
            reference: "1 Samuel 16:13",
            explanation: "Samuel anointed David as king while he was still a shepherd boy."
        },
        {
            question: "Which prophet told King David about his sin with Bathsheba?",
            options: ["Samuel", "Nathan", "Gad", "Elijah"],
            correct: 1,
            difficulty: "average",
            reference: "2 Samuel 12:1",
            explanation: "Nathan confronted David with a parable about a rich man and a poor man's lamb."
        },
        {
            question: "Which prophet prophesied the coming of John the Baptist?",
            options: ["Isaiah", "Jeremiah", "Malachi", "Ezekiel"],
            correct: 2,
            difficulty: "difficult",
            reference: "Malachi 3:1",
            explanation: "Malachi prophesied that God would send a messenger to prepare the way before Him."
        },
        {
            question: "Which prophet had a vision of God's throne with seraphim?",
            options: ["Isaiah", "Ezekiel", "Daniel", "Jeremiah"],
            correct: 0,
            difficulty: "average",
            reference: "Isaiah 6:1-2",
            explanation: "Isaiah saw the Lord seated on a throne with seraphim calling 'Holy, holy, holy.'"
        },
        {
            question: "Which prophet was told not to marry as a sign to Israel?",
            options: ["Isaiah", "Jeremiah", "Ezekiel", "Hosea"],
            correct: 1,
            difficulty: "difficult",
            reference: "Jeremiah 16:2",
            explanation: "God told Jeremiah not to marry as a sign of the coming judgment."
        },
        {
            question: "Which prophet interpreted the writing on the wall for King Belshazzar?",
            options: ["Ezekiel", "Daniel", "Isaiah", "Jeremiah"],
            correct: 1,
            difficulty: "average",
            reference: "Daniel 5:25",
            explanation: "Daniel interpreted 'Mene, Mene, Tekel, Parsin' for King Belshazzar."
        },
        {
            question: "Which prophet was commanded to lie on his side for 390 days?",
            options: ["Isaiah", "Jeremiah", "Ezekiel", "Hosea"],
            correct: 2,
            difficulty: "difficult",
            reference: "Ezekiel 4:4-5",
            explanation: "Ezekiel was commanded to lie on his left side for 390 days as a sign against Israel."
        }
    ],
    
    kingsJudges: [
        {
            question: "Who was the first king of Israel?",
            options: ["David", "Saul", "Solomon", "Samuel"],
            correct: 1,
            difficulty: "easy",
            reference: "1 Samuel 10:1",
            explanation: "Saul was anointed as Israel's first king by the prophet Samuel."
        },
        {
            question: "Which king built the first temple in Jerusalem?",
            options: ["David", "Solomon", "Hezekiah", "Josiah"],
            correct: 1,
            difficulty: "easy",
            reference: "1 Kings 6:1",
            explanation: "Solomon built the magnificent temple in Jerusalem that his father David had planned."
        },
        {
            question: "Who was the youngest judge of Israel?",
            options: ["Samson", "Gideon", "Samuel", "Deborah"],
            correct: 2,
            difficulty: "average",
            reference: "1 Samuel 3:1",
            explanation: "Samuel was called by God as a young boy and became a judge of Israel."
        },
        {
            question: "Which king wrote most of the Psalms?",
            options: ["Solomon", "David", "Hezekiah", "Josiah"],
            correct: 1,
            difficulty: "easy",
            reference: "Psalms",
            explanation: "King David wrote approximately 73 of the 150 Psalms."
        },
        {
            question: "Who was known as the wisest king?",
            options: ["David", "Solomon", "Hezekiah", "Josiah"],
            correct: 1,
            difficulty: "easy",
            reference: "1 Kings 3:12",
            explanation: "God granted Solomon's request for wisdom, making him the wisest person who ever lived."
        },
        {
            question: "Which judge used a fleece to confirm God's will?",
            options: ["Samson", "Gideon", "Jephthah", "Ehud"],
            correct: 1,
            difficulty: "average",
            reference: "Judges 6:36-40",
            explanation: "Gideon asked God for signs using a fleece to confirm he should lead Israel against Midian."
        },
        {
            question: "Which king defeated Goliath when he was young?",
            options: ["Saul", "David", "Solomon", "Josiah"],
            correct: 1,
            difficulty: "easy",
            reference: "1 Samuel 17:50",
            explanation: "David defeated the giant Goliath with a sling and stone before becoming king."
        },
        {
            question: "Who was the only female judge of Israel?",
            options: ["Miriam", "Deborah", "Ruth", "Esther"],
            correct: 1,
            difficulty: "easy",
            reference: "Judges 4:4",
            explanation: "Deborah was a prophetess and the only female judge who led Israel."
        },
        {
            question: "Which king had 700 wives and 300 concubines?",
            options: ["David", "Solomon", "Rehoboam", "Ahab"],
            correct: 1,
            difficulty: "average",
            reference: "1 Kings 11:3",
            explanation: "Solomon had many foreign wives who turned his heart away from God in his old age."
        },
        {
            question: "Which judge was known for his great strength?",
            options: ["Gideon", "Samson", "Ehud", "Othniel"],
            correct: 1,
            difficulty: "easy",
            reference: "Judges 13:24-25",
            explanation: "Samson was granted supernatural strength by God as a Nazirite."
        },
        {
            question: "Which king saw the writing on the wall?",
            options: ["Nebuchadnezzar", "Belshazzar", "Cyrus", "Darius"],
            correct: 1,
            difficulty: "average",
            reference: "Daniel 5:5",
            explanation: "King Belshazzar saw a hand writing on the wall during his feast."
        },
        {
            question: "Who was the last judge of Israel?",
            options: ["Eli", "Samuel", "Gideon", "Samson"],
            correct: 1,
            difficulty: "average",
            reference: "1 Samuel 7:15",
            explanation: "Samuel served as the last judge before Israel demanded a king."
        },
        {
            question: "Which king had leprosy?",
            options: ["David", "Solomon", "Uzziah", "Hezekiah"],
            correct: 2,
            difficulty: "difficult",
            reference: "2 Chronicles 26:19",
            explanation: "King Uzziah was struck with leprosy for burning incense in the temple without being a priest."
        },
        {
            question: "Which king led a great religious reformation in Judah?",
            options: ["Hezekiah", "Josiah", "Asa", "Jehoshaphat"],
            correct: 1,
            difficulty: "average",
            reference: "2 Kings 23:25",
            explanation: "King Josiah led a major reformation after finding the Book of the Law in the temple."
        },
        {
            question: "Who was king when Israel split into two kingdoms?",
            options: ["Solomon", "Rehoboam", "Jeroboam", "David"],
            correct: 1,
            difficulty: "average",
            reference: "1 Kings 12:1",
            explanation: "The kingdom split under Rehoboam, Solomon's son, due to his harsh policies."
        }
    ],
    
    miracles: [
        {
            question: "What was Jesus' first miracle?",
            options: ["Healing a blind man", "Walking on water", "Turning water into wine", "Feeding 5000"],
            correct: 2,
            difficulty: "easy",
            reference: "John 2:1-11",
            explanation: "Jesus turned water into wine at the wedding in Cana of Galilee."
        },
        {
            question: "How many loaves and fish did Jesus use to feed the 5000?",
            options: ["5 loaves and 2 fish", "7 loaves and 3 fish", "3 loaves and 5 fish", "2 loaves and 7 fish"],
            correct: 0,
            difficulty: "easy",
            reference: "John 6:9",
            explanation: "Jesus multiplied 5 barley loaves and 2 fish to feed the multitude."
        },
        {
            question: "Who did Jesus raise from the dead after four days?",
            options: ["Jairus' daughter", "Lazarus", "The widow's son", "Tabitha"],
            correct: 1,
            difficulty: "easy",
            reference: "John 11:43-44",
            explanation: "Jesus raised Lazarus from the dead, demonstrating His power over death."
        },
        {
            question: "What sea did Jesus walk on?",
            options: ["Dead Sea", "Red Sea", "Sea of Galilee", "Mediterranean Sea"],
            correct: 2,
            difficulty: "easy",
            reference: "Matthew 14:25",
            explanation: "Jesus walked on the Sea of Galilee to meet His disciples in their boat."
        },
        {
            question: "Which disciple walked on water with Jesus?",
            options: ["John", "James", "Peter", "Andrew"],
            correct: 2,
            difficulty: "easy",
            reference: "Matthew 14:29",
            explanation: "Peter walked on water briefly before beginning to sink when he doubted."
        },
        {
            question: "How many lepers did Jesus heal, but only one returned to thank Him?",
            options: ["Five", "Seven", "Ten", "Twelve"],
            correct: 2,
            difficulty: "average",
            reference: "Luke 17:12-19",
            explanation: "Jesus healed ten lepers, but only one, a Samaritan, returned to give thanks."
        },
        {
            question: "What did Jesus use to heal a blind man?",
            options: ["His saliva and mud", "Oil", "Water", "His garment"],
            correct: 0,
            difficulty: "average",
            reference: "John 9:6",
            explanation: "Jesus made mud with His saliva and put it on the blind man's eyes."
        },
        {
            question: "Whose daughter did Jesus raise from the dead?",
            options: ["Peter's", "Matthew's", "Jairus'", "Nicodemus'"],
            correct: 2,
            difficulty: "average",
            reference: "Mark 5:41-42",
            explanation: "Jesus raised Jairus' twelve-year-old daughter from the dead."
        },
        {
            question: "What did Peter find in a fish's mouth?",
            options: ["A ring", "A coin", "A pearl", "A key"],
            correct: 1,
            difficulty: "average",
            reference: "Matthew 17:27",
            explanation: "Peter found a coin in the fish's mouth to pay the temple tax."
        },
        {
            question: "Whose ear did Jesus heal after it was cut off?",
            options: ["Pilate's servant", "The high priest's servant", "A Roman soldier", "A temple guard"],
            correct: 1,
            difficulty: "average",
            reference: "Luke 22:50-51",
            explanation: "Jesus healed Malchus, the high priest's servant, after Peter cut off his ear."
        },
        {
            question: "What natural force did Jesus calm?",
            options: ["Earthquake", "Storm", "Fire", "Flood"],
            correct: 1,
            difficulty: "easy",
            reference: "Mark 4:39",
            explanation: "Jesus calmed a storm on the Sea of Galilee with His command."
        },
        {
            question: "How long had the woman with the issue of blood suffered?",
            options: ["5 years", "12 years", "18 years", "20 years"],
            correct: 1,
            difficulty: "average",
            reference: "Mark 5:25",
            explanation: "The woman had suffered from bleeding for twelve years before touching Jesus' cloak."
        },
        {
            question: "What happened to the fig tree Jesus cursed?",
            options: ["It bore fruit", "It withered", "It fell down", "It caught fire"],
            correct: 1,
            difficulty: "average",
            reference: "Mark 11:20",
            explanation: "The fig tree withered from the roots after Jesus cursed it for not bearing fruit."
        },
        {
            question: "Whose mother-in-law did Jesus heal?",
            options: ["Peter's", "John's", "James'", "Andrew's"],
            correct: 0,
            difficulty: "average",
            reference: "Matthew 8:14-15",
            explanation: "Jesus healed Peter's mother-in-law of a fever."
        },
        {
            question: "How many baskets of leftovers were collected after feeding the 5000?",
            options: ["7 baskets", "10 baskets", "12 baskets", "5 baskets"],
            correct: 2,
            difficulty: "average",
            reference: "Matthew 14:20",
            explanation: "Twelve baskets of fragments were collected after everyone had eaten."
        }
    ],
    
    parables: [
        {
            question: "In the Parable of the Sower, what happened to the seeds that fell on rocky ground?",
            options: ["Birds ate them", "They withered quickly", "They produced much fruit", "They were trampled"],
            correct: 1,
            difficulty: "average",
            reference: "Matthew 13:5-6",
            explanation: "The seeds on rocky ground sprang up quickly but withered because they had no deep roots."
        },
        {
            question: "What did the Good Samaritan do for the injured man?",
            options: ["Prayed for him", "Took him to an inn", "Gave him money", "Called for help"],
            correct: 1,
            difficulty: "easy",
            reference: "Luke 10:34",
            explanation: "The Good Samaritan bandaged the man's wounds and took him to an inn to care for him."
        },
        {
            question: "In the Parable of the Prodigal Son, what did the son ask for?",
            options: ["Forgiveness", "His inheritance", "A job", "Food"],
            correct: 1,
            difficulty: "easy",
            reference: "Luke 15:12",
            explanation: "The younger son asked his father for his share of the inheritance."
        },
        {
            question: "What was the lost son feeding when he came to his senses?",
            options: ["Sheep", "Pigs", "Cattle", "Chickens"],
            correct: 1,
            difficulty: "average",
            reference: "Luke 15:15",
            explanation: "The prodigal son was feeding pigs when he realized he should return home."
        },
        {
            question: "In the Parable of the Lost Sheep, how many sheep did the shepherd have?",
            options: ["50", "75", "100", "120"],
            correct: 2,
            difficulty: "average",
            reference: "Luke 15:4",
            explanation: "The shepherd left ninety-nine sheep to search for the one that was lost."
        },
        {
            question: "What did the foolish rich man plan to do with his abundant harvest?",
            options: ["Share with the poor", "Build bigger barns", "Give to the temple", "Sell it all"],
            correct: 1,
            difficulty: "average",
            reference: "Luke 12:18",
            explanation: "The rich fool planned to build bigger barns to store all his grain and goods."
        },
        {
            question: "How many servants received talents in the Parable of the Talents?",
            options: ["Two", "Three", "Five", "Ten"],
            correct: 1,
            difficulty: "average",
            reference: "Matthew 25:15",
            explanation: "Three servants received talents: one received five, one two, and one received one talent."
        },
        {
            question: "In the Parable of the Pharisee and Tax Collector, who went home justified?",
            options: ["The Pharisee", "The Tax Collector", "Both", "Neither"],
            correct: 1,
            difficulty: "easy",
            reference: "Luke 18:14",
            explanation: "The humble tax collector who asked for mercy went home justified before God."
        },
        {
            question: "What did the merchant sell to buy the pearl of great price?",
            options: ["His house", "Everything he had", "His livestock", "His land"],
            correct: 1,
            difficulty: "average",
            reference: "Matthew 13:46",
            explanation: "The merchant sold everything he owned to buy the one pearl of great value."
        },
        {
            question: "In the Parable of the Ten Virgins, how many were wise?",
            options: ["Three", "Five", "Seven", "Ten"],
            correct: 1,
            difficulty: "average",
            reference: "Matthew 25:2",
            explanation: "Five virgins were wise and brought extra oil for their lamps."
        },
        {
            question: "What kind of tree did Jesus use in a parable about faith?",
            options: ["Oak", "Fig", "Mustard", "Olive"],
            correct: 2,
            difficulty: "average",
            reference: "Matthew 17:20",
            explanation: "Jesus said faith as small as a mustard seed could move mountains."
        },
        {
            question: "In the Parable of the Unmerciful Servant, how much did the first servant owe?",
            options: ["100 denarii", "1000 talents", "10,000 talents", "1 million denarii"],
            correct: 2,
            difficulty: "difficult",
            reference: "Matthew 18:24",
            explanation: "The servant owed his master ten thousand talents, an enormous debt."
        },
        {
            question: "What did the workers in the vineyard all receive?",
            options: ["Different wages", "The same wage", "Nothing", "Portions of the harvest"],
            correct: 1,
            difficulty: "average",
            reference: "Matthew 20:9-10",
            explanation: "All workers received the same wage, regardless of when they started working."
        },
        {
            question: "Where was the man going who fell among thieves in the Good Samaritan parable?",
            options: ["From Jerusalem to Jericho", "From Jericho to Jerusalem", "From Nazareth to Jerusalem", "From Jerusalem to Bethlehem"],
            correct: 0,
            difficulty: "average",
            reference: "Luke 10:30",
            explanation: "The man was going down from Jerusalem to Jericho when he was attacked."
        },
        {
            question: "What did the father do when the prodigal son returned?",
            options: ["Scolded him", "Made him a servant", "Threw a celebration", "Sent him away"],
            correct: 2,
            difficulty: "easy",
            reference: "Luke 15:22-23",
            explanation: "The father celebrated with the best robe, a ring, and a feast for his returned son."
        }
    ],
    
    womenInBible: [
        {
            question: "Who was the first woman created by God?",
            options: ["Sarah", "Eve", "Mary", "Rachel"],
            correct: 1,
            difficulty: "easy",
            reference: "Genesis 2:22",
            explanation: "Eve was the first woman, created from Adam's rib."
        },
        {
            question: "Who was the mother of Jesus?",
            options: ["Elizabeth", "Mary", "Martha", "Anna"],
            correct: 1,
            difficulty: "easy",
            reference: "Luke 1:30-31",
            explanation: "Mary was chosen by God to be the mother of Jesus Christ."
        },
        {
            question: "Which woman hid the Israelite spies in Jericho?",
            options: ["Ruth", "Rahab", "Deborah", "Esther"],
            correct: 1,
            difficulty: "average",
            reference: "Joshua 2:1",
            explanation: "Rahab hid the spies and helped them escape, saving her family when Jericho fell."
        },
        {
            question: "Who was the mother of Samuel?",
            options: ["Hannah", "Rachel", "Leah", "Sarah"],
            correct: 0,
            difficulty: "average",
            reference: "1 Samuel 1:20",
            explanation: "Hannah prayed earnestly for a son and dedicated Samuel to God's service."
        },
        {
            question: "Which woman saved the Jewish people from destruction?",
            options: ["Ruth", "Esther", "Deborah", "Miriam"],
            correct: 1,
            difficulty: "easy",
            reference: "Esther 7:3",
            explanation: "Queen Esther risked her life to save her people from Haman's plot."
        },
        {
            question: "Who was the sister of Moses?",
            options: ["Deborah", "Miriam", "Zipporah", "Rachel"],
            correct: 1,
            difficulty: "easy",
            reference: "Exodus 15:20",
            explanation: "Miriam was a prophetess and the sister of Moses and Aaron."
        },
        {
            question: "Which woman poured perfume on Jesus' feet?",
            options: ["Mary Magdalene", "Mary of Bethany", "Martha", "Joanna"],
            correct: 1,
            difficulty: "average",
            reference: "John 12:3",
            explanation: "Mary of Bethany anointed Jesus' feet with expensive perfume and wiped them with her hair."
        },
        {
            question: "Who was the mother of John the Baptist?",
            options: ["Mary", "Elizabeth", "Anna", "Martha"],
            correct: 1,
            difficulty: "average",
            reference: "Luke 1:13",
            explanation: "Elizabeth, who was related to Mary, gave birth to John the Baptist in her old age."
        },
        {
            question: "Which woman was turned into a pillar of salt?",
            options: ["Lot's wife", "Sarah", "Hagar", "Rebekah"],
            correct: 0,
            difficulty: "easy",
            reference: "Genesis 19:26",
            explanation: "Lot's wife looked back at Sodom and was turned into a pillar of salt."
        },
        {
            question: "Who was the mother of Solomon?",
            options: ["Michal", "Abigail", "Bathsheba", "Ahinoam"],
            correct: 2,
            difficulty: "average",
            reference: "2 Samuel 12:24",
            explanation: "Bathsheba was the mother of Solomon, who became king after David."
        },
        {
            question: "Which woman said 'Your people shall be my people, and your God my God'?",
            options: ["Naomi", "Ruth", "Orpah", "Rachel"],
            correct: 1,
            difficulty: "average",
            reference: "Ruth 1:16",
            explanation: "Ruth made this beautiful declaration of loyalty to Naomi and to God."
        },
        {
            question: "Who was the mother of Isaac?",
            options: ["Hagar", "Sarah", "Rebekah", "Rachel"],
            correct: 1,
            difficulty: "easy",
            reference: "Genesis 21:2-3",
            explanation: "Sarah gave birth to Isaac in her old age, as God had promised."
        },
        {
            question: "Which woman was known for her hospitality to Elisha?",
            options: ["The widow of Zarephath", "The Shunammite woman", "Rahab", "Lydia"],
            correct: 1,
            difficulty: "difficult",
            reference: "2 Kings 4:8",
            explanation: "The Shunammite woman provided a room for Elisha, and he blessed her with a son."
        },
        {
            question: "Who was the first person to see Jesus after His resurrection?",
            options: ["Mary, His mother", "Mary Magdalene", "Peter", "John"],
            correct: 1,
            difficulty: "average",
            reference: "John 20:14-16",
            explanation: "Mary Magdalene was the first to see the risen Jesus at the tomb."
        },
        {
            question: "Which woman was a seller of purple cloth?",
            options: ["Priscilla", "Lydia", "Phoebe", "Dorcas"],
            correct: 1,
            difficulty: "average",
            reference: "Acts 16:14",
            explanation: "Lydia was a dealer in purple cloth who became Paul's first European convert."
        }
    ],
    
    psalmsWisdom: [
        {
            question: "What psalm begins with 'The Lord is my shepherd'?",
            options: ["Psalm 1", "Psalm 23", "Psalm 51", "Psalm 91"],
            correct: 1,
            difficulty: "easy",
            reference: "Psalm 23:1",
            explanation: "Psalm 23 is one of the most beloved psalms, portraying God as a caring shepherd."
        },
        {
            question: "Which book begins with 'Vanity of vanities, all is vanity'?",
            options: ["Proverbs", "Job", "Ecclesiastes", "Song of Solomon"],
            correct: 2,
            difficulty: "average",
            reference: "Ecclesiastes 1:2",
            explanation: "Ecclesiastes reflects on the meaning of life and human pursuits."
        },
        {
            question: "Who is traditionally credited with writing most of the Proverbs?",
            options: ["David", "Solomon", "Moses", "Isaiah"],
            correct: 1,
            difficulty: "easy",
            reference: "Proverbs 1:1",
            explanation: "Solomon, known for his wisdom, wrote most of the Book of Proverbs."
        },
        {
            question: "What is the longest chapter in the Bible?",
            options: ["Psalm 23", "Psalm 91", "Psalm 119", "Psalm 150"],
            correct: 2,
            difficulty: "difficult",
            reference: "Psalm 119",
            explanation: "Psalm 119 has 176 verses and is an acrostic poem about God's law."
        },
        {
            question: "Which psalm did Jesus quote on the cross?",
            options: ["Psalm 22", "Psalm 23", "Psalm 27", "Psalm 51"],
            correct: 0,
            difficulty: "average",
            reference: "Psalm 22:1, Matthew 27:46",
            explanation: "Jesus quoted Psalm 22:1 - 'My God, my God, why have you forsaken me?'"
        },
        {
            question: "What is the first word of the first Psalm?",
            options: ["Lord", "Blessed", "Happy", "Praise"],
            correct: 1,
            difficulty: "average",
            reference: "Psalm 1:1",
            explanation: "Psalm 1:1 begins with 'Blessed is the man who walks not in the counsel of the wicked.'"
        },
        {
            question: "Which book tells the story of a righteous man who suffered greatly?",
            options: ["Psalms", "Job", "Ecclesiastes", "Proverbs"],
            correct: 1,
            difficulty: "easy",
            reference: "Job 1:1",
            explanation: "The Book of Job tells of Job's suffering and his dialogue with God about justice."
        },
        {
            question: "What does Proverbs say is the beginning of wisdom?",
            options: ["Knowledge", "Understanding", "Fear of the Lord", "Righteousness"],
            correct: 2,
            difficulty: "average",
            reference: "Proverbs 9:10",
            explanation: "'The fear of the Lord is the beginning of wisdom' is a key theme in Proverbs."
        },
        {
            question: "How many books are in the wisdom literature?",
            options: ["Three", "Five", "Seven", "Nine"],
            correct: 1,
            difficulty: "difficult",
            reference: "Catholic Bible",
            explanation: "The wisdom books are Job, Psalms, Proverbs, Ecclesiastes, and Song of Solomon (plus Wisdom and Sirach in Catholic Bible)."
        },
        {
            question: "Which psalm is known as the psalm of creation?",
            options: ["Psalm 8", "Psalm 19", "Psalm 104", "Psalm 148"],
            correct: 2,
            difficulty: "difficult",
            reference: "Psalm 104",
            explanation: "Psalm 104 is a beautiful meditation on God's creative power and providence."
        },
        {
            question: "What does Ecclesiastes say there is 'a time for'?",
            options: ["Prayer", "Everything", "Work", "Rest"],
            correct: 1,
            difficulty: "average",
            reference: "Ecclesiastes 3:1",
            explanation: "'For everything there is a season, and a time for every matter under heaven.'"
        },
        {
            question: "Which psalm begins with 'O Lord, our Lord, how majestic is your name'?",
            options: ["Psalm 1", "Psalm 8", "Psalm 19", "Psalm 23"],
            correct: 1,
            difficulty: "average",
            reference: "Psalm 8:1",
            explanation: "Psalm 8 marvels at God's glory and humanity's place in creation."
        },
        {
            question: "What did Job say about his birth after his suffering began?",
            options: ["He was blessed", "He cursed the day", "He praised God", "He remained silent"],
            correct: 1,
            difficulty: "average",
            reference: "Job 3:1",
            explanation: "Job cursed the day of his birth due to his intense suffering."
        },
        {
            question: "Complete this proverb: 'Pride goes before...'",
            options: ["A fall", "Destruction", "Shame", "Humility"],
            correct: 1,
            difficulty: "average",
            reference: "Proverbs 16:18",
            explanation: "'Pride goes before destruction, and a haughty spirit before a fall.'"
        },
        {
            question: "Which psalm is a prayer of repentance written by David?",
            options: ["Psalm 23", "Psalm 51", "Psalm 91", "Psalm 119"],
            correct: 1,
            difficulty: "average",
            reference: "Psalm 51",
            explanation: "Psalm 51 is David's prayer of repentance after his sin with Bathsheba."
        }
    ],
    
    gospels: [
        {
            question: "Where was Jesus born?",
            options: ["Nazareth", "Jerusalem", "Bethlehem", "Capernaum"],
            correct: 2,
            difficulty: "easy",
            reference: "Matthew 2:1",
            explanation: "Jesus was born in Bethlehem of Judea, fulfilling the prophecy of Micah 5:2."
        },
        {
            question: "Who said 'You are the Messiah, the Son of the living God'?",
            options: ["John", "Andrew", "Simon Peter", "James"],
            correct: 2,
            difficulty: "easy",
            reference: "Matthew 16:16",
            explanation: "Peter made this great confession of faith when Jesus asked the disciples who they believed Him to be."
        },
        {
            question: "What Gospel contains the Parable of the Good Samaritan?",
            options: ["Matthew", "Mark", "Luke", "John"],
            correct: 2,
            difficulty: "easy",
            reference: "Luke 10:29-37",
            explanation: "The Parable of the Good Samaritan is found only in Luke's Gospel."
        },
        {
            question: "Under what tree did Jesus see Nathanael?",
            options: ["Fig", "Sycamore", "Cedar", "Olive"],
            correct: 0,
            difficulty: "average",
            reference: "John 1:48",
            explanation: "Jesus told Nathanael, 'I saw you under the fig tree before Philip called you.'"
        },
        {
            question: "Who said 'Do whatever he tells you'?",
            options: ["Jesus", "Mary, the mother of Jesus", "Simon Peter", "The heavenly Father"],
            correct: 1,
            difficulty: "easy",
            reference: "John 2:5",
            explanation: "Mary said this to the servants at the wedding in Cana before Jesus performed his first miracle."
        },
        {
            question: "Where did Jesus perform his first miracle?",
            options: ["Jerusalem", "Capernaum", "Cana", "Bethsaida"],
            correct: 2,
            difficulty: "easy",
            reference: "John 2:11",
            explanation: "Jesus performed his first miracle at the wedding in Cana of Galilee, turning water into wine."
        },
        {
            question: "How many great discourses of Jesus does the Gospel of Matthew contain?",
            options: ["Three", "Five", "Seven", "Ten"],
            correct: 1,
            difficulty: "average",
            reference: "Matthew",
            explanation: "Matthew's Gospel contains five major discourses of Jesus, including the Sermon on the Mount."
        },
        {
            question: "What Jewish group denied the resurrection?",
            options: ["Pharisees", "Sadducees", "Zealots", "Herodians"],
            correct: 1,
            difficulty: "average",
            reference: "Mark 12:18, Acts 23:8",
            explanation: "The Sadducees did not believe in the resurrection, angels, or spirits."
        },
        {
            question: "Who was the Roman emperor when Jesus was born?",
            options: ["Julius Caesar", "Nero", "Tiberius", "Augustus Caesar"],
            correct: 3,
            difficulty: "average",
            reference: "Luke 2:1",
            explanation: "Caesar Augustus was emperor when he issued a decree for a census, bringing Mary and Joseph to Bethlehem."
        },
        {
            question: "In what Gospel is Jesus' genealogy traced back to Adam?",
            options: ["Matthew", "Mark", "Luke", "John"],
            correct: 2,
            difficulty: "average",
            reference: "Luke 3:38",
            explanation: "Luke traces Jesus' genealogy all the way back to Adam, emphasizing Jesus' connection to all humanity."
        },
        {
            question: "Who baptized Jesus?",
            options: ["Peter", "John the Baptist", "Andrew", "James"],
            correct: 1,
            difficulty: "easy",
            reference: "Matthew 3:13",
            explanation: "John the Baptist baptized Jesus in the Jordan River."
        },
        {
            question: "How many temptations did Jesus face in the wilderness?",
            options: ["Two", "Three", "Five", "Seven"],
            correct: 1,
            difficulty: "easy",
            reference: "Matthew 4:1-11",
            explanation: "Jesus faced three temptations from Satan in the wilderness after His baptism."
        },
        {
            question: "What did Jesus say are the two greatest commandments?",
            options: ["Love God and love your neighbor", "Pray and fast", "Keep the Sabbath holy", "Honor your parents"],
            correct: 0,
            difficulty: "easy",
            reference: "Matthew 22:37-39",
            explanation: "Jesus said to love God with all your heart and love your neighbor as yourself."
        },
        {
            question: "Who betrayed Jesus?",
            options: ["Peter", "Judas Iscariot", "Thomas", "Matthew"],
            correct: 1,
            difficulty: "easy",
            reference: "Matthew 26:48",
            explanation: "Judas Iscariot betrayed Jesus with a kiss in the Garden of Gethsemane."
        },
        {
            question: "What did the inscription on Jesus' cross say?",
            options: ["King of Israel", "Jesus of Nazareth, King of the Jews", "The Messiah", "Son of God"],
            correct: 1,
            difficulty: "average",
            reference: "John 19:19",
            explanation: "Pilate had the inscription 'Jesus of Nazareth, the King of the Jews' placed on the cross."
        }
    ],
    
    actsLetters: [
        {
            question: "Where was Saul going when he was converted?",
            options: ["Jerusalem", "Damascus", "Antioch", "Tarsus"],
            correct: 1,
            difficulty: "easy",
            reference: "Acts 9:3",
            explanation: "Saul was on the road to Damascus when he encountered the risen Christ and was converted."
        },
        {
            question: "Who wrote the Letter to the Romans at Paul's dictation?",
            options: ["Tertius", "Rufus", "Luke", "Timothy"],
            correct: 0,
            difficulty: "average",
            reference: "Romans 16:22",
            explanation: "Tertius identifies himself as the one who wrote down Paul's letter to the Romans."
        },
        {
            question: "How many times was Paul shipwrecked according to his letters?",
            options: ["Once", "Twice", "Three times", "Five times"],
            correct: 2,
            difficulty: "average",
            reference: "2 Corinthians 11:25",
            explanation: "Paul recounts being shipwrecked three times in his ministry."
        },
        {
            question: "Who was Paul's 'beloved physician'?",
            options: ["Timothy", "Luke", "Silas", "Titus"],
            correct: 1,
            difficulty: "easy",
            reference: "Colossians 4:14",
            explanation: "Luke, the author of the Gospel and Acts, is called 'the beloved physician' by Paul."
        },
        {
            question: "What is the shortest letter of Paul?",
            options: ["1 Thessalonians", "Titus", "Ephesians", "Philemon"],
            correct: 3,
            difficulty: "average",
            reference: "Philemon",
            explanation: "The letter to Philemon is Paul's shortest letter, containing only 25 verses."
        },
        {
            question: "In what letter does Paul speak of the 'third heaven'?",
            options: ["Romans", "2 Corinthians", "Philippians", "Ephesians"],
            correct: 1,
            difficulty: "difficult",
            reference: "2 Corinthians 12:2",
            explanation: "Paul mentions being caught up to the third heaven in his second letter to the Corinthians."
        },
        {
            question: "What New Testament letter emphasizes that 'faith without works is dead'?",
            options: ["Romans", "Galatians", "James", "1 Peter"],
            correct: 2,
            difficulty: "easy",
            reference: "James 2:17",
            explanation: "James emphasizes the importance of demonstrating faith through actions."
        },
        {
            question: "Where was John when he received the Revelation?",
            options: ["Crete", "Patmos", "Cyprus", "Rhodes"],
            correct: 1,
            difficulty: "easy",
            reference: "Revelation 1:9",
            explanation: "John was exiled on the island of Patmos when he received the visions recorded in Revelation."
        },
        {
            question: "What number is associated with the Beast in Revelation?",
            options: ["666", "777", "888", "999"],
            correct: 0,
            difficulty: "easy",
            reference: "Revelation 13:18",
            explanation: "The number of the beast is 666, described as the number of a man."
        },
        {
            question: "Who was the centurion who was the first Gentile convert?",
            options: ["Julius", "Cornelius", "Claudius", "Marcus"],
            correct: 1,
            difficulty: "average",
            reference: "Acts 10:1",
            explanation: "Cornelius, a centurion from Caesarea, was the first Gentile to be baptized by Peter."
        },
        {
            question: "Which city were the disciples first called 'Christians'?",
            options: ["Jerusalem", "Damascus", "Antioch", "Rome"],
            correct: 2,
            difficulty: "average",
            reference: "Acts 11:26",
            explanation: "The disciples were first called Christians in Antioch."
        },
        {
            question: "To whom did Paul send the slave Onesimus after converting him?",
            options: ["Timothy", "Titus", "Philemon", "Epaphras"],
            correct: 2,
            difficulty: "average",
            reference: "Philemon 10",
            explanation: "Paul sent Onesimus back to his master Philemon, asking him to receive him as a brother in Christ."
        },
        {
            question: "What are the first and last letters of the Greek alphabet used to describe Christ?",
            options: ["Alpha and Omega", "Beta and Psi", "Gamma and Chi", "Delta and Phi"],
            correct: 0,
            difficulty: "easy",
            reference: "Revelation 1:8",
            explanation: "Jesus is called the Alpha and Omega, symbolizing that He is the beginning and the end."
        },
        {
            question: "According to Hebrews, what is Jesus' priesthood order?",
            options: ["Aaron", "Levi", "Melchizedek", "Moses"],
            correct: 2,
            difficulty: "average",
            reference: "Hebrews 7:17",
            explanation: "Jesus is a priest forever according to the order of Melchizedek, not the Levitical priesthood."
        },
        {
            question: "Who does 1 Peter compare the devil to?",
            options: ["A serpent", "A roaring lion", "A wolf", "A dragon"],
            correct: 1,
            difficulty: "easy",
            reference: "1 Peter 5:8",
            explanation: "Peter warns that the devil prowls around like a roaring lion looking for someone to devour."
        }
    ]
};

// Quiz state
let currentCategory = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let quizStartTime = 0;
let timerInterval = null;

// Start quiz with selected category
function startQuiz(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    quizStartTime = Date.now();
    
    // Select questions based on category
    if (category === 'mixed') {
        currentQuestions = [
            ...shuffleArray(quizData.oldTestament).slice(0, 3),
            ...shuffleArray(quizData.prophets).slice(0, 3),
            ...shuffleArray(quizData.kingsJudges).slice(0, 2),
            ...shuffleArray(quizData.gospels).slice(0, 3),
            ...shuffleArray(quizData.miracles).slice(0, 3),
            ...shuffleArray(quizData.parables).slice(0, 2),
            ...shuffleArray(quizData.womenInBible).slice(0, 2),
            ...shuffleArray(quizData.psalmsWisdom).slice(0, 2),
            ...shuffleArray(quizData.actsLetters).slice(0, 3)
        ];
        currentQuestions = shuffleArray(currentQuestions);
    } else {
        currentQuestions = shuffleArray([...quizData[category]]);
    }
    
    // Update UI
    document.getElementById('categoryScreen').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'block';
    document.getElementById('resultsScreen').style.display = 'none';
    
    document.getElementById('totalQuestions').textContent = currentQuestions.length;
    document.getElementById('totalQuestionsDisplay').textContent = currentQuestions.length;
    
    displayQuestion();
}

// Display current question
function displayQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    const container = document.getElementById('questionContainer');
    
    // Update progress
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('currentScore').textContent = score;
    const progress = ((currentQuestionIndex) / currentQuestions.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    
    // Build question HTML
    let html = `
        <div class="question-card">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <span class="difficulty-badge difficulty-${question.difficulty}">
                    ${question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
                </span>
                <small class="text-muted">${question.reference}</small>
            </div>
            <h4 class="mb-4">${question.question}</h4>
            <div class="options">
    `;
    
    question.options.forEach((option, index) => {
        html += `
            <button class="option-btn" onclick="selectAnswer(${index})" id="option${index}">
                ${String.fromCharCode(65 + index)}. ${option}
            </button>
        `;
    });
    
    html += `
            </div>
            <div id="answerFeedback" style="display: none;"></div>
        </div>
    `;
    
    container.innerHTML = html;
    document.getElementById('nextBtn').style.display = 'none';
}

// Handle answer selection
function selectAnswer(selectedIndex) {
    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.correct;
    
    // Store answer
    userAnswers.push({
        question: question.question,
        selected: selectedIndex,
        correct: question.correct,
        isCorrect: isCorrect,
        explanation: question.explanation,
        reference: question.reference,
        difficulty: question.difficulty
    });
    
    // Update score
    if (isCorrect) {
        score++;
        document.getElementById('currentScore').textContent = score;
    }
    
    // Disable all buttons and show feedback
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === question.correct) {
            btn.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });
    
    // Show explanation
    const feedback = document.getElementById('answerFeedback');
    feedback.innerHTML = `
        <div class="answer-explanation">
            <h6 class="mb-2">
                <i class="bi ${isCorrect ? 'bi-check-circle text-success' : 'bi-x-circle text-danger'} me-2"></i>
                ${isCorrect ? 'Correct!' : 'Incorrect'}
            </h6>
            <p class="mb-0">${question.explanation}</p>
        </div>
    `;
    feedback.style.display = 'block';
    
    // Show next button
    document.getElementById('nextBtn').style.display = 'inline-block';
}

// Move to next question
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

// Show results
function showResults() {
    document.getElementById('quizScreen').style.display = 'none';
    document.getElementById('resultsScreen').style.display = 'block';
    
    const elapsedTime = Math.floor((Date.now() - quizStartTime) / 1000);
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    
    const totalQuestions = currentQuestions.length;
    const correctAnswers = userAnswers.filter(a => a.isCorrect).length;
    
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    document.getElementById('finalScore').textContent = correctAnswers;
    document.getElementById('finalTotal').textContent = totalQuestions;
    document.getElementById('percentageScore').textContent = percentage + '%';
    
    // Performance message
    const messageDiv = document.getElementById('performanceMessage');
    let message = '';
    let alertClass = '';
    
    if (percentage >= 90) {
        message = '🏆 Excellent! You have great knowledge of the Bible!';
        alertClass = 'alert-success';
    } else if (percentage >= 70) {
        message = '⭐ Very Good! Keep studying the Scriptures!';
        alertClass = 'alert-primary';
    } else if (percentage >= 50) {
        message = '👍 Good effort! Continue reading the Bible to improve!';
        alertClass = 'alert-info';
    } else {
        message = '📖 Keep learning! Spend more time studying God\'s Word!';
        alertClass = 'alert-warning';
    }
    
    messageDiv.className = 'alert ' + alertClass;
    messageDiv.innerHTML = `
        <div class="mb-2">${message}</div>
        <small class="text-muted">
            <i class="bi bi-clock me-2"></i>Time: ${minutes}:${seconds.toString().padStart(2, '0')}
        </small>
    `;
}

// Show category selection
function showCategory() {
    document.getElementById('categoryScreen').style.display = 'block';
    document.getElementById('quizScreen').style.display = 'none';
    document.getElementById('resultsScreen').style.display = 'none';
}

// Review answers
function reviewAnswers() {
    let reviewHTML = '<div class="quiz-container"><h3 class="mb-4"><i class="bi bi-journal-check me-2"></i>Review Your Answers</h3>';
    
    userAnswers.forEach((answer, index) => {
        const question = currentQuestions[index];
        reviewHTML += `
            <div class="question-card mb-3">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <h5 class="mb-0">Question ${index + 1}</h5>
                    <span class="difficulty-badge difficulty-${answer.difficulty}">
                        ${answer.difficulty.charAt(0).toUpperCase() + answer.difficulty.slice(1)}
                    </span>
                </div>
                <p class="mb-2">${answer.question}</p>
                <p class="mb-2">
                    <strong>Your answer:</strong> 
                    <span class="${answer.isCorrect ? 'text-success' : 'text-danger'}">
                        ${question.options[answer.selected]}
                        <i class="bi ${answer.isCorrect ? 'bi-check-circle' : 'bi-x-circle'} ms-1"></i>
                    </span>
                </p>
                ${!answer.isCorrect ? `
                    <p class="mb-2">
                        <strong>Correct answer:</strong> 
                        <span class="text-success">${question.options[answer.correct]}</span>
                    </p>
                ` : ''}
                <div class="answer-explanation">
                    <small><strong>Explanation:</strong> ${answer.explanation}</small><br>
                    <small class="text-muted"><strong>Reference:</strong> ${answer.reference}</small>
                </div>
            </div>
        `;
    });
    
    reviewHTML += `
        <button class="btn btn-primary" onclick="showCategory()">
            <i class="bi bi-arrow-left me-2"></i>Back to Categories
        </button>
    </div>`;
    
    document.getElementById('quizScreen').style.display = 'none';
    document.getElementById('resultsScreen').innerHTML = reviewHTML;
}

// Shuffle array helper
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}
