const scenes = [
    { // Scene 1
        "title": "The Fairy and the Acorn", // audio's "written by Caroline" changed to "written by Octavia’s mother Caroline"
        "text": "In the fairy tale written by Octavia&rsquo;s mother Caroline, an elderly lady plants an acorn, the seed of an ancient oak called Skyrack. That night she dreams that a fairy waves her wand over the acorn and sees it as a fully grown oak with all the benefits the tree has brought in its one thousand years life.</p><p>The Octavia Story Mural shows how the acorn planted in Wisbech in the 1830s led to the oak tree of the National Trust."
    },
    {
        "title": "The New Moral World",
        "text": "Octavia&rsquo;s mother and father, James and Caroline Hill, were followers of Robert Owen, the former industrialist, who toured the country in the 1830s advocating the kind of social reform he had initiated at his New Lanark mill.</p><p>In this scene, Owen can be seen in Wisbech lecturing to the United Advancement Society on his vision of building a better society, where co-operation would replace competition, and everyone would have equal opportunities in life."
    },
    {
        "title": "Education for Everyone",
        "text": "For Robert Owen, universal education was essential for a better society. Here, Caroline Hill teaches at the infant school she and James built for the poor children of Wisbech.</p><p>On the wall is a portrait of Pestalozzi the Swiss educationalist, who was known as &lsquo;the children&rsquo;s friend&rsquo;. Caroline was the first woman in England to teach using his methods."
    },
    {
        "title": "The Death of Bentham",
        "text": "Based on Hogarth&rsquo;s work, <i>The Stages of Cruelty</i>, this scene shows Octavia&rsquo;s grandfather, Dr Thomas Southwood Smith dissecting the body of his friend, the philospher Jeremy Bentham, for medical research. As he did so he discoursed on the character and attributes of his friend.</p><p>Octavia&rsquo;s life can be seen as an attempt to mitigate the harshness of Bentham&rsquo;s mechanistic view of society."
    },
    { // Scene 5
        "title": "The Romantic Lakes",
        "text": "In the beauty of the Lake District, two figures &ndash; Thomas Clarkson of Wisbech, and the poet William Wordsworth &ndash; symbolise moral force and Romanticism.</p><p>Clarkson campaigned for the abolition of slavery; Wordsworth helped to establish the Romantic movement, which led to the appreciation of ancient buildings and environment. The third figure is Octavia&rsquo;s aunt, Margaret Gillies, who painted Wordsworth&rsquo;s portrait in 1838."
    },
    {
        "title": "New Lanark Mill",
        "text": "At this mill in Scotland, industrialist Robert Owen provided schools, homes, and education for his workforce. By providing a benign environment, he made it the most profitable mill in Europe."
    },
    {
        "title": "Caroline Meets James Hill",
        "text": "On the left, Dr Southwood Smith&rsquo;s daughter Caroline arrives at James Hill&rsquo;s house to become governess to his children.</p><p>On the right, five years later, James and his wife Caroline carry the baby Octavia away from the house, having lost everything supporting Robert Owen&rsquo;s ideals."
    },
    {
        "title": "The Wisbech Infant School",
        "text": "Caroline Hill, Octavia&rsquo;s mother, is seen here outside the Infant School with some of the poor children that she taught.</p><p>The Infant School was also opened in the evenings as a community hall. Above the door you can see Wordsworth&rsquo;s words, looking forward to a better world."
    },
    {
        "title": "Leaping Ditches",
        "text": "Brought up by her mother in the north London area of Finchley, which was then rural, Octavia spent an idyllic childhood leaping ditches and climbing trees. Once she tied her sisters behind her when she jumped the Strawberry Vale brook; she remained dry, they did not.</p><p>Her grandfather Dr Thomas Southwood Smith lived nearby in Highgate, where, depicted on the right, she met Hans Christian Andersen."
    },
    { // Scene 10
        "title": "Bleak Houses",
        "text": "As physician to the London Fever Hospital, Octavia&rsquo;s grandfather, Dr Thomas Southwood Smith, introduced Charles Dickens and the Home Secretary to the living conditions of poor people. He became medical adviser to the General Board of Health.</p><p>Charles Dickens wrote <i>Bleak House</i> at a time when he was inspired by Southwood Smith&rsquo;s work."
    },
    {
        "title": "The Ladies&rsquo; Guild",
        "text": "Octavia, aged fifteen, moved to London to take charge of the workshop of the Ladies&rsquo; Guild, which was managed by her mother. This was a co-operation venture aimed at emancipating women.</p><p>Here she met John Ruskin, who saw the ladies making the figures for dolls&rsquo; houses, and painting glass tables."
    },
    {
        "title": "John Ruskin Teaches",
        "text": "For ten years, from 1854, John Ruskin taught Octavia to copy paintings. All her art training was based on close observation, and meticulous craftmanship. This scene show Octavia copying Bellini&rsquo;s <i>Doge</i>."
    },
    {
        "title": "Nottingham Place School",
        "text": "For many years, the Hill sisters ran a private girls&rsquo; school at their home in Marylebone."
    },
    {
        "title": "Fog",
        "text": "Fog, and general air pollution, was a major feature of Victorian London, which was warmed by coal-fuel fires.</p><p>The opening chapter of Dicken&rsquo;s <i>Bleak House</i> uses the fog as a metaphor for the failure to see society&rsquo;s problems clearly. Here various acts of casual charity are shown."
    },
    { // Scene 15
        "title": "Two Nations",
        "text": "In his novel <i>Sybil</i>, Disraeli characterised Victorian society as comprising two nations: the Rich and the Poor. In this elegant house, a family has adequate living space and domestic amenities, including servants."
    },
    {
        "title": "Women and Children&rsquo;s Work",
        "text": "Octavia&rsquo;s grandfather, Dr Southwood Smith, was a member of the Royal Commission that investigated the working conditions of women and children in the nation&rsquo;s mines. These scenes were probably drawn by his partner, Octavia&rsquo;s aunt Margaret."
    },
    {
        "title": "Death and Burials",
        "text": "As London&rsquo;s population increased, overcrowding in urban burial grounds and crypts led to problems of disease. This was a major preoccupation of Octavia&rsquo;s grandfather Dr Thomas Southwood Smith, and the Board of Health."
    },
    {
        "title": "Drains and No Drains",
        "text": "As London developed, the natural watercourses of London became its sewers. Many houses were not linked to any drains, and water supplies were often drawn from polluted sources."
    },
    {
        "title": "Christian Socialism", // audio's "the leader of the Christian socialist F. D. Maurice" changed to "the leader of the Christian socialists F. D. Maurice"
        "text": "For three years, Octavia attended Lincoln&rsquo;s Inn Chapel, to hear the sermons of the leader of the Christian socialists F. D. Maurice. He advocated Christian social action by the educated and privileged, to change society and reduce suffering."
    },
    { // Scene 20
        "title": "Paradise Place", // audio's "number three Paradise Place" changed to "3 Paradise Place"
        "text": "John Ruskin purchased 3 Paradise Place, in London&rsquo;s Marylebone. The eight room house had thirty-seven people living in it.</p><p>Octavia Hill managed it for him as a social housing experiment, to prove that investors could rent houses to poor people, and still achieve a modest return on capital."
    },
    {
        "title": "Freshwater Place and Barrett&rsquo;s Court",
        "text": "Over the next ten years, Octavia proved her methods at various sites in Marylebone. At Freshwater Place, Ruskin&rsquo;s gardener planted trees, making the beginning of her awareness of the need for play-space around homes.</p><p>Her work attracted much attention, and in 1874, Princess Alice &ndash; Queen Victoria&rsquo;s daughter &ndash; visited Barrett&rsquo;s Court incognito."
    },
    {
        "title": "Pilgrim&rsquo;s Progress",
        "text": "Octavia Hill used a basement room in Barrett&rsquo;s Court to stage Bunyan&rsquo;s <i>Pilgrim&rsquo;s Progress</i>. She often staged entertainments in an attempt to enhance poor people&rsquo;s lives."
    },
    {
        "title": "Space for the People", // audio's "to stop the overlooking into his garden" changed to "to stop them overlooking into his garden"
        "text": "In many places, Londoners were still able to walk a short distance into undeveloped countryside, as at the fields beyond Swiss Cottage. In the heart of London, at Barrett&rsquo;s Court, many poor people had no recreational space at all, and the adjoining householder built a high wall to stop them overlooking into his garden.</p><p>The wall symbolises the lack of access to trees and parks for poor people."
    },
    {
        "title": "Saving Open Spaces",
        "text": "In 1875 Octavia Hill joined forces with the Commons Preservation Society, to try to buy Swiss Cottage Fields, which were going to be developed with houses. Here she can be seen standing with her fianc&eacute; Edward Bond, and Robert Hunter, later a founder with her of the National Trust. They failed but it was the first of many such campaigns."
    },
    { // Scene 25
        "title": "Organising Charity",
        "text": "With funds from John Ruskin, Octavia Hill and others established the Charity Organisation Society, to co-ordinate charitable efforts in London. Here a family is applying for help. The C.O.S. was not popular, and was known as &ldquo;Cringe or Starve&rdquo;."
    },
    {
        "title": "The General Disposes",
        "text": "In 1877, following a quarrel with John Ruskin, the loss of Swiss Cottage Fields, and the end of her engagement, Octavia suffered a major nervous breakdown through overwork. By this time, she was known to her fellow workers as &ldquo;The General&rdquo;.</p><p>Here she is shown sending her fellow workers to target various areas of poverty in London."
    },
    {
        "title": "Rest Cure",
        "text": "For three years, Octavia rested and travelled Europe with her new-found companion, Harriet Yorke. In Nuremberg she sketched and painted the pretty houses that were to influence her attempts to bring beauty to the London streets."
    },
    {
        "title": "Theatre for Everyone",
        "text": "While Octavia was away, her fellow workers continued her work. Near Waterloo, Emma Cons began working on the area known as &lsquo;hooligan land&rsquo;. She later bought the Old Victoria music hall, and transformed it into today&rsquo;s Old Vic Theatre."
    },
    {
        "title": "Art for Everyone",
        "text": "Octavia&rsquo;s fellow workers Samuel and Henrietta Barnett moved to the East End of London, and established Toynbee Hall &ndash; the first university settlement &ndash; and the Whitechapel Art Gallery &ndash; which aimed to bring art into poor people&rsquo;s lives."
    },
    { // Scene 30
        "title": "Beauty for Everyone",
        "text": "William Morris, speaking, is seen here at the first public meeting of the Kyrle Society, which Octavia and her sister Miranda established for bringing beauty to the people. It was named after John Kyrle of Ross-on-Wye, Pope&rsquo;s exemplary civic benefactor."
    },
    {
        "title": "Clean Air for Everyone",
        "text": "The Kyrle society campaigned for clean air, and organised the first public exhibition of fuel efficient coal-burning stoves. This picture is based on a contemporary <i>Punch</i> cartoon, showing the attempt to blow away the London fogs."
    },
    {
        "title": "Settlements",
        "text": "The Women&rsquo;s University Settlement, near Waterloo Station, became a community centre and focus of social work training for women. It was linked to the London School of Economics."
    },
    {
        "title": "Red Cross Cottages",
        "text": "This row of pretty cottages, near London Bridge, was built to bring beauty and colour to one of the worst slum areas of London. Designed by the architect Elijah Hoole, the cottages are still owned by Octavia Housing and Care."
    },
    {
        "title": "Red Cross Hall",
        "text": "Alongside Red Cross Cottages, Octavia established a drop-in community hall, to serve the area, in which she staged plays and concerts. The walls were decorated with murals by Walter Crane. Caroline Hill can be seen seated on the right."
    },
    { // Scene 35
        "title": "Red Cross Garden",
        "text": "Adjoining Red Cross Hall and Cottages, the Kyrle Society laid out a community garden, complete with bandstand, pond, and mosaics by the noted artist Salviati, who decorated the interior of St Paul&rsquo;s Cathedral."
    },
    {
        "title": "Underground Railway",
        "text": "Octavia Hill is seen travelling by underground railway, carrying her Poor Law Commission box.</p><p>Transport improvements in London enabled working people to live further from their work, which reduced the demand for accommodation in central areas."
    },
    {
        "title": "New Drains",
        "text": "Sanitary improvements later in the century included the repair and replacement of many of the underground drains of London, which reduced health hazards."
    },
    {
        "title": "Church Housing",
        "text": "With her reputation established, Octavia was asked to manage the properties of the Ecclesiastical Commissioners in south London.</p><p>The Walworth Estate of block dwellings comprising eight hundred homes was managed under Octavia&rsquo;s supervision. These properties are still known as the Octavia Hill Estate."
    },
    {
        "title": "Notting Hill and Dale",
        "text": "Princes Terrace, Notting Hill, was part of a management operation established by Reginald Rowe and others in a notorious North Kensington slum. The area can still be seen today as an interesting mix of market and social housing."
    },
    { // Scene 40
        "title": "Still Foggy",
        "text": "Various approaches &ndash; political, revolutionary, and religious &ndash; to social reform can be seen represented in the London fog."
    },
    {
        "title": "Outdoor Sitting Rooms",
        "text": "Octavia called her small open spaces outdoor sitting rooms, and campaigned to create and retain large and small scale recreational open space in and around London, and elsewhere.</p><p>The kite is flown on Parliament Hill, the bandstand is on Hilly Fields, Lewisham, and the arcade is in Postman&rsquo;s Park."
    },
    {
        "title": "The Green Belt and the National Trust",
        "text": "In 1895, Octavia helped establish the National Trust, to own land and properties &lsquo;for ever, for everyone&rsquo;. In her final years, she organised the purchase of several Kentish hills threatened with development, and gave them to the National Trust.</p><p>On the right is Crockham Hill church, where she is buried."
    },
    {
        "title": "The Lakes: &lsquo;for Ever, for Everyone&rsquo;",
        "text": "Much of the early activity of the National Trust was in the Lake District, which now owns a quarter of the land. The land retains much of its character, depicted in scene five during Octavia&rsquo;s childhood."
    },
    {
        "title": "Roman Bath",
        "text": "One of the most unusual of the National Trust&rsquo;s properties is the mock-Roman bath off the Strand in London, which was probably constructed by the Earl of Arundel in the seventeenth-century."
    },
    { // Scene 45
        "title": "Then and Now",
        "text": "Generations of Octavia Hill&rsquo;s fellow workers, including Helen Parrish of Philadelphia, USA, stand around the graves of Robert Owen, Octavia Hill, James Hill, and John Ruskin."
    },
    {
        "title": "The Hill Family Coat of Arms",
        "text": "Motto in Latin: &ldquo;If you start something, complete it.&rdquo;"
    }
];