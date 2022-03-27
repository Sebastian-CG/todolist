import { useEffect } from "react";
import useAuth from "hooks/useAuth";
import DefaultLayout from "components/layouts/DefaultLayout";
import styles from "../scss/home.module.css";

const Home = () => {
  const { user, logOut } = useAuth();

  useEffect(() => console.log(user), [user]);

  return (
    <DefaultLayout>
      <h1>✌ Hello World !!!</h1>
      <button onClick={() => logOut()}>Log Out</button>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde eaque aut
        itaque sunt veniam quod aliquam a fugiat id quae, amet laborum vel,
        voluptates vitae excepturi saepe alias modi consequatur porro ducimus
        molestiae possimus ratione ullam. Vel, assumenda illum rem voluptatem ex
        dicta iure suscipit voluptas quidem optio reprehenderit adipisci commodi
        quod voluptatum quos quaerat dolores! Iure dolorem similique magnam
        quasi laborum quaerat fugit maxime amet nihil dolores, officia molestias
        quod perferendis vel eligendi, quo doloremque esse quidem provident
        omnis est? Architecto error aperiam a officia, voluptatibus cum possimus
        ex, libero rem, modi laboriosam asperiores minus tempore nihil qui at
        nam itaque magni eos. Tempore, reprehenderit. Ducimus quam dicta,
        distinctio odio, modi expedita perferendis minima quo hic enim odit,
        atque explicabo quas commodi repellendus pariatur voluptatibus officia
        ad sunt voluptates tempore mollitia temporibus. Magni dolorem, odio
        eaque atque fuga nihil placeat fugit sed fugiat ullam. Cumque, tenetur.
        Reprehenderit quisquam nostrum laborum in commodi harum ex. Hic
        recusandae inventore eum impedit facere perspiciatis delectus tempora?
        Nam expedita nesciunt ad iure possimus cumque voluptates veniam vero
        similique cupiditate! Voluptatibus dolores, sunt deserunt perspiciatis
        exercitationem alias atque perferendis accusamus numquam voluptates,
        amet animi blanditiis nisi necessitatibus rerum temporibus voluptas
        ducimus? Cumque, illo sit. Atque numquam adipisci assumenda inventore
        quidem ullam asperiores libero molestias laudantium alias sunt maiores
        distinctio, facilis quisquam nisi beatae dolor repudiandae neque
        incidunt fuga mollitia? Asperiores consequuntur fugiat voluptas
        laboriosam dolores quia itaque quae eaque, laudantium quod incidunt, est
        veniam veritatis fuga. Molestiae ad illo eaque sed dignissimos odio
        facere, alias dolorem eveniet labore minima quam facilis soluta
        voluptatem. Ipsa omnis libero sapiente voluptatem ad nostrum excepturi!
        Officia impedit illo dicta dolorum quo sequi id ipsum? Vel animi odit
        asperiores qui magnam sequi ullam pariatur harum quae praesentium optio
        hic, sint, earum nobis nam autem? Ducimus non error, sed animi laborum
        totam hic eum aut veritatis incidunt et cupiditate sunt officiis maiores
        nemo repudiandae fugiat voluptate? Consequuntur deleniti odit placeat
        autem dolorum illum, consectetur nobis quo! Aspernatur quo culpa fugiat
        eius eos dolorum illum pariatur unde dignissimos. Maxime quis sed autem
        rerum dolores? Harum officiis vitae commodi voluptates eligendi
        praesentium quisquam, quo placeat voluptas quasi nobis iure quaerat
        error, debitis quibusdam eos consequatur? Dolorum labore eius saepe amet
        optio, est maiores ut possimus beatae nesciunt sint architecto similique
        cumque porro alias minima quo animi? Eum a impedit sit animi, labore
        nesciunt corrupti distinctio eius eos magni. Ducimus tempore soluta
        necessitatibus corrupti in sit aspernatur obcaecati quibusdam placeat
        dolore itaque modi cumque quisquam ad et, quo illo tenetur? Modi placeat
        dignissimos nostrum aspernatur! Vel consectetur aperiam soluta
        asperiores sunt recusandae quam rem obcaecati earum possimus a adipisci
        dolor ipsa, sit quis quas sequi perferendis assumenda quidem eum
        facilis, rerum explicabo. Iusto perspiciatis cupiditate error temporibus
        animi sapiente quo placeat provident tempore commodi ut in maxime, rem,
        vero suscipit exercitationem quaerat dolore eius iure asperiores
        voluptatibus! Sunt maxime nobis nulla est pariatur iste id aliquam, qui
        laboriosam ratione molestias, officia consectetur magni consequatur nam
        ipsam dolore sint doloribus sit quidem aperiam! Iusto, a. Facilis amet
        iusto soluta placeat reprehenderit aliquam! Cumque ex similique
        suscipit, saepe rerum voluptas nobis odio ipsum dolorem sint eum impedit
        mollitia earum temporibus ducimus quis voluptate voluptatibus nemo.
        Error a nobis distinctio dolorem minus incidunt quod molestias ab
        provident! Autem, nihil. Quisquam odit atque temporibus labore nostrum
        quibusdam, error, suscipit nemo fugiat doloribus laborum provident
        adipisci? Quaerat soluta rerum veritatis libero exercitationem quasi
        maxime ratione, porro qui. Velit in esse officiis obcaecati nihil sint
        consequuntur cum cumque voluptate impedit modi, quibusdam autem.
        Recusandae quidem vitae sapiente corrupti. Dolores magni, eos ducimus,
        vitae eaque voluptatibus natus dolor optio laudantium facere consectetur
        laboriosam. Provident, similique alias nam maxime porro cupiditate,
        natus nisi soluta, consequatur dolor consectetur deleniti? Voluptas
        eligendi excepturi, quaerat quae modi perspiciatis repellendus nemo
        laudantium deleniti nesciunt dolor? Officiis, placeat autem. Sint sit ex
        aliquid. Modi eum saepe aperiam! Voluptatibus corrupti officiis
        voluptatem. Repellendus qui explicabo totam. Debitis deserunt temporibus
        esse sed laboriosam beatae, libero explicabo. Sapiente delectus tempore
        ducimus doloremque reprehenderit beatae unde in sint similique quis
        vitae veritatis quia est porro totam, mollitia accusamus officiis saepe
        repellendus quos maxime velit temporibus! Tenetur ab qui quod molestiae
        numquam sed earum voluptatem possimus mollitia, explicabo vitae ad?
        Consequuntur optio quia dolores inventore sint eveniet aliquid totam
        labore accusamus voluptatum, id recusandae? Excepturi placeat quisquam
        ad, rerum ea expedita natus impedit magnam quibusdam corrupti!
        Dignissimos officia et illo quasi quisquam quia assumenda. Impedit ea,
        molestiae at cupiditate iure modi amet id in quo, totam provident
        voluptatem dolor minima sunt. Ad totam eveniet animi optio quod
        recusandae repellat porro praesentium, obcaecati illum, id, at
        asperiores sed enim debitis aut. Veniam dolor obcaecati, culpa ducimus
        iste labore alias eius fugiat incidunt eligendi laudantium, magnam
        numquam explicabo fuga aperiam aliquam libero quia molestias consectetur
        accusantium deleniti. Veniam, in fugit. Enim minus tempora omnis,
        voluptate est, at, esse quia illo ratione soluta quis? Esse animi iure,
        earum nulla voluptatibus placeat delectus fugit sunt rem tempore quae
        ratione itaque saepe, inventore voluptatum a? Quam animi minus molestias
        velit recusandae unde architecto aspernatur, inventore et! Impedit
        accusantium incidunt id pariatur odit, asperiores sint laudantium
        doloremque laboriosam vero minima expedita deleniti quae ullam amet
        temporibus modi, ad ratione suscipit nobis. Consectetur, hic. Neque,
        quidem incidunt, commodi temporibus omnis quam labore officiis sed eius
        repudiandae quasi cumque! Maxime ullam accusamus nobis soluta atque
        tempora iusto aperiam. Ab placeat neque incidunt omnis corrupti
        molestias. Amet rem illo ipsam ut quia necessitatibus ullam, voluptate
        quod tenetur enim explicabo iusto dolor alias sequi rerum dolore
        reprehenderit perspiciatis sunt. Magnam recusandae pariatur perspiciatis
        necessitatibus tempore expedita non facilis a asperiores, ut suscipit
        sequi, sunt magni, culpa aliquam vero beatae voluptatem! Cupiditate
        laudantium officiis doloremque, animi corporis nobis aliquid. Ratione
        eaque fugiat in quos, iusto quisquam! Iste inventore similique a,
        consequuntur dolores eum quia reiciendis saepe ipsum error ex nisi
        deleniti dignissimos eos, sed doloribus deserunt non eius nemo
        molestias? Debitis quisquam facilis modi. Eos ipsum unde deserunt
        aperiam odit rem fugiat beatae non fugit quos. Quo, impedit nemo magnam
        recusandae quibusdam voluptatibus, perferendis alias ex, est dolorem
        doloribus commodi obcaecati quas atque totam! Non veniam laboriosam
        eveniet a dolorum cumque! Cumque eaque, vel, iure tenetur quidem quam
        itaque nesciunt corrupti ducimus quos voluptate officia! Aliquid
        ducimus, et aspernatur asperiores quas a eligendi sequi molestiae
        facilis dicta! Iure at nihil quae adipisci obcaecati dolorem voluptate?
        Beatae, quas pariatur mollitia tempora impedit, ad illum magni itaque
        aliquam facere vero esse aliquid quam dolor commodi cupiditate sint
        rerum voluptatum consequuntur. Et quam ipsum animi omnis enim,
        exercitationem harum minima voluptatibus neque error deserunt placeat
        eos quis recusandae quod dolore consectetur ducimus velit tempora.
        Veritatis cumque dolore soluta voluptate tempora praesentium voluptates
        ducimus laudantium blanditiis perspiciatis. Nobis veniam commodi non in,
        perspiciatis a optio voluptatibus ex suscipit perferendis? Velit sit
        blanditiis eos ipsam fugiat unde aspernatur suscipit, possimus
        asperiores? Doloremque quaerat officiis nesciunt dolorum accusantium,
        molestiae quisquam nemo hic explicabo voluptatum nulla. Cupiditate
        laboriosam accusamus enim aliquam nulla mollitia perspiciatis modi totam
        ducimus illum commodi ipsam ea, amet expedita cumque earum tenetur aut,
        excepturi est et explicabo eveniet corporis? Quas, porro. Qui fugit,
        labore vel esse ullam maiores sequi numquam dolores ipsum possimus
        mollitia sapiente repudiandae delectus explicabo velit corporis vero
        obcaecati corrupti minus, dicta voluptatibus consequatur. Laborum
        recusandae dicta veniam praesentium. Omnis qui facilis repudiandae totam
        aliquid perferendis quisquam delectus, error corporis unde voluptatibus
        in necessitatibus saepe odit nisi repellendus quis praesentium esse aut
        eveniet excepturi illum non ipsa. Placeat laborum deserunt facilis?
        Earum ad corrupti quam dolorem sint dicta corporis, dignissimos
        voluptates ipsa similique praesentium debitis accusantium in fugit culpa
        vitae saepe facilis, exercitationem numquam quod? Quae ab voluptatem
        sequi ullam dolore, suscipit repudiandae velit rem, aliquid voluptate
        quas consectetur sit distinctio adipisci qui fuga enim molestiae
        consequatur blanditiis deserunt quod accusantium quia officiis! Et
        tempore, ab natus libero reiciendis officia deserunt adipisci illum
        delectus accusamus possimus asperiores odit maiores hic quisquam maxime
        dicta dolores sunt rem aspernatur esse voluptatem facere quas. Adipisci
        animi eius error blanditiis, quam quaerat amet officia suscipit vel
        laborum, exercitationem fugiat in voluptatum minima distinctio ex,
        repellat quae! Velit architecto quam, eos praesentium odio quae ea est
        perferendis eum in voluptatum quibusdam repellendus? Praesentium ab
        possimus deleniti voluptate ex voluptatibus voluptatem rem repellat
        culpa vitae, numquam nihil neque mollitia dignissimos amet consequuntur
        esse dicta cumque cupiditate natus adipisci nesciunt iure eum. Nostrum
        praesentium a omnis, quasi nobis corporis, dolor veritatis commodi
        facilis dicta sed nam repudiandae ipsum obcaecati impedit fugit aperiam
        amet eligendi consectetur mollitia labore ipsam! Reprehenderit animi,
        voluptatibus totam rem, repellendus sed similique delectus, obcaecati ab
        accusamus quae ullam voluptas dicta repellat cumque ipsum? Minus
        pariatur at cumque aliquid debitis maiores nemo nihil praesentium rem
        delectus, officiis doloribus beatae, possimus deleniti fugiat incidunt
        molestias eos maxime. Provident perspiciatis cupiditate libero
        accusamus, at nemo incidunt quas dolorum deleniti rem ut hic itaque
        dolores perferendis odio possimus quod rerum, porro pariatur asperiores
        consectetur iusto eligendi. Totam saepe perferendis ipsam provident iste
        quo ipsum, maiores error architecto laboriosam consequatur commodi unde
        ad ex ipsa ullam voluptatibus, quos expedita officia inventore, soluta
        nisi voluptates. Dignissimos error quis blanditiis ducimus quaerat enim
        excepturi possimus, in maiores dolor aliquam iusto id. Voluptates
        ducimus asperiores perferendis modi aliquid veniam commodi nostrum ipsam
        natus beatae distinctio est libero, nobis odio, quas inventore ullam in
        recusandae, veritatis enim ea dolor sed tempore. Placeat repellat
        voluptas distinctio nobis incidunt vero quo cupiditate consectetur
        sapiente laudantium corrupti dolor necessitatibus ut accusamus error
        facere, sed ab, est nemo sunt amet consequuntur. Laborum nesciunt porro
        est vero rem neque. Odit culpa dolor voluptate quasi tempore accusamus
        itaque temporibus, nam modi nostrum consequuntur, iure ad nisi
        perspiciatis cum similique id soluta voluptatem fuga veniam eligendi
        officia! Sequi, ipsum vero. Molestiae facere aut odit, ducimus, quia
        tenetur temporibus nobis accusamus modi commodi unde, ipsam quae sit
        repudiandae molestias quas eaque aperiam veniam? Est repudiandae
        exercitationem maiores, hic ea alias, deserunt iusto blanditiis laborum
        porro dolorum soluta sint modi maxime, itaque autem. Magni repellat
        voluptas provident corporis repudiandae veritatis culpa quasi in! Aut at
        qui magni fuga facere facilis eum nostrum assumenda, quia deserunt.
        Excepturi nisi autem neque sapiente laborum reiciendis impedit ut
        voluptates. Fuga quisquam modi deserunt quibusdam laboriosam impedit
        ipsa reprehenderit esse reiciendis odit error similique hic quas
        voluptas, in ad, provident, enim illum? Dolores assumenda tempore
        deleniti illo corrupti nemo, facilis sed, eveniet, repellat
        necessitatibus quaerat minima officia dolore soluta cupiditate molestias
        saepe modi expedita similique. Suscipit ratione, exercitationem natus
        voluptatum nulla esse magni accusamus architecto reiciendis dicta quo
        dolor nihil quaerat libero nam harum recusandae? Dicta ipsa doloremque
        assumenda quam? Non facere itaque modi iusto dolores quam blanditiis
        molestias, expedita aliquid eum aperiam beatae reiciendis fugiat
        obcaecati in eius tempore illo? Maxime architecto odit nihil fuga fugiat
        enim nam id voluptatem sint repellat quam necessitatibus, eius veniam
        est qui quisquam ab corporis autem perspiciatis illo! Cum quos ipsam
        obcaecati esse suscipit eaque possimus corrupti distinctio reiciendis
        beatae in illo ex aliquid mollitia, vero laboriosam, architecto magni
        unde. Libero voluptatum pariatur perspiciatis debitis, laudantium
        tempore, at aspernatur atque neque dolorem minima reprehenderit, quasi
        voluptate nam. Quibusdam fugit, qui atque fuga exercitationem optio
        repudiandae voluptatum consequatur, itaque dolor ut quam. Fuga error
        deleniti libero asperiores ad nobis itaque, perferendis in velit, sit
        qui. Iusto error quam, impedit placeat dignissimos ducimus? Numquam
        iusto earum commodi ex repellendus quia velit, dignissimos adipisci!
        Nemo officia mollitia ut consectetur! Nulla id molestiae modi suscipit
        assumenda ut recusandae voluptates sequi nobis ex officia nihil, minima
        eveniet eaque veniam repellendus fuga error sed aliquam totam? Fuga,
        assumenda. Facere error harum, eius est minus minima odit voluptatibus
        veritatis praesentium nihil iusto facilis, debitis fugit ipsam, vitae in
        iste cupiditate temporibus voluptas repudiandae. Pariatur animi eaque
        quos consectetur quidem, delectus quas praesentium sapiente dolorum
        incidunt corporis. Ut quod repellat laborum ad omnis corporis
        necessitatibus dolores distinctio blanditiis? Dignissimos sed explicabo
        debitis labore maiores corrupti? Iste laboriosam alias exercitationem.
        Aperiam assumenda fugit odio dolore qui natus magni alias dolores,
        magnam quibusdam, deserunt excepturi architecto suscipit maxime corrupti
        hic. Ut enim mollitia atque vero perspiciatis odit magni possimus
        officiis cupiditate quos ullam sequi quasi quae expedita, aspernatur
        fuga quaerat, optio blanditiis architecto, exercitationem animi et.
        Minima commodi repellat non corrupti aliquid sapiente eius nisi
        molestias est dolores provident nesciunt temporibus, pariatur ut vero
        vel illum sed magni veritatis dolorem omnis velit. Voluptates, cumque
        nobis cupiditate nulla eveniet sed. Dolores accusantium nulla pariatur
        autem magni dolore provident unde eveniet, eum non exercitationem
        assumenda adipisci nihil similique rem temporibus ea nemo voluptate.
        Consequatur minima itaque tempora adipisci explicabo. Alias accusamus
        sed saepe, unde quae amet modi nobis quis temporibus assumenda id
        deleniti facere quisquam inventore veniam illum culpa vel officiis
        laborum praesentium in. Quidem et, sit doloribus itaque iure distinctio
        ipsa, hic dolorum fugit nobis, tenetur illum totam sint ducimus incidunt
        aliquid. Sunt rerum porro non dolorum. Sunt facere mollitia aspernatur
        obcaecati nemo optio dolorum tempore quo ratione ea animi perferendis
        voluptate, voluptatem ab alias quisquam quasi, quae consectetur
        molestiae in excepturi culpa nobis tempora molestias. Possimus inventore
        facilis placeat vel temporibus ratione id maiores aut quas, quia autem
        aliquam illum porro officiis sapiente minus corporis! Ut et earum eos?
        Odit a sint consequuntur quas maiores ratione, quae qui molestias
        expedita voluptas sequi natus, fugiat ad molestiae error eos aut,
        incidunt necessitatibus repudiandae. Ipsam obcaecati corrupti dolore
        nihil ducimus ab, ipsa quo debitis a cupiditate commodi illum voluptatum
        nulla sapiente mollitia. Consequuntur accusantium temporibus tempora,
        sequi nisi sunt alias? Commodi molestias, voluptates sint ratione illo
        similique possimus quas voluptatum debitis cumque, doloribus quibusdam
        quasi minus neque atque consequuntur, libero architecto amet earum
        provident dolorum labore temporibus. Sit quidem omnis, laborum autem
        sint numquam aliquid laboriosam, doloribus nemo ratione soluta
        perspiciatis cupiditate quis ipsum repellendus. Quas perferendis ullam
        dolores nihil quaerat, et sit aperiam, deleniti molestias, animi
        praesentium pariatur. Dolorem incidunt dolor repellat assumenda dolore
        natus! Nostrum esse similique ratione omnis? Quia modi ad officiis esse
        nisi odio illo aliquam, nihil fuga voluptate ex repellendus quas dolore.
        Unde exercitationem quidem sed tempore commodi, corrupti quas porro in
        fugiat mollitia sunt perferendis dignissimos. Suscipit magni corrupti
        cumque pariatur iusto hic officiis maxime eos quidem. Nostrum at iusto
        facere, voluptatibus officiis maxime quibusdam sunt nisi deserunt ut
        ipsa cupiditate repellat tempora inventore, neque labore dolores
        corporis veniam unde! Quisquam amet tempora repudiandae necessitatibus
        blanditiis labore, quos obcaecati autem ex accusamus? Excepturi eligendi
        quia ea accusamus quisquam tempore? Illo eveniet quis eligendi cum est
        qui, consectetur minus ratione tempore, optio nostrum asperiores, quidem
        autem! Iste iure sit cumque? Eos vel eius, omnis quisquam ducimus nobis
        modi quibusdam, id dicta sit optio quod earum perspiciatis nihil fugiat
        deserunt. Temporibus assumenda deleniti ipsam, ea rem nemo cum sequi
        debitis sed perferendis labore consequuntur earum ipsum impedit sint
        repudiandae quidem? Quibusdam, repudiandae totam quasi a nulla voluptate
        cumque maiores possimus harum, molestias suscipit reiciendis cupiditate
        nihil hic asperiores optio facere laudantium ullam delectus minima sit
        eum nemo! Veritatis aliquam itaque illum nulla eveniet laudantium,
        temporibus a. Expedita veniam, doloremque fuga dignissimos quis magnam
        pariatur nemo doloribus voluptates at sint ea quibusdam dolore
        reprehenderit corporis est non. Nesciunt corporis temporibus hic numquam
        ullam molestias enim harum iure eum sint commodi tempore odio, ex
        explicabo et voluptatum! Veniam quisquam rem nobis asperiores quod, quia
        officia exercitationem dolor error natus velit obcaecati, voluptatibus
        magnam, molestias possimus illo inventore quasi dolorem ratione? In
        illo, temporibus consequuntur sunt, consectetur cum iure neque
        voluptatem odio ad expedita sapiente omnis magni deleniti eveniet
        aliquam. Ad dolor alias non unde dolorum necessitatibus accusamus
        perspiciatis illo error ut, quia ab aut sunt amet est pariatur animi.
        Ullam, id, ex eius quaerat labore veniam cupiditate quidem quasi
        laudantium doloribus aperiam sed quos reiciendis porro possimus nostrum
        similique quis obcaecati deserunt, esse error. Sunt dolorem est dolore
        illum quam molestiae maxime ratione, accusamus amet eius quod laudantium
        minima odio qui doloribus officia reprehenderit, fuga molestias neque
        consequuntur, quibusdam eveniet numquam. Deserunt quas magnam ut ullam
        soluta, in ad, eum nemo totam quia alias, enim voluptas fuga a eos nobis
        blanditiis! Voluptatibus sit doloribus voluptas consequatur velit esse!
        Debitis nostrum necessitatibus iusto omnis similique, ad blanditiis ut
        numquam, voluptas cum vero facere repellat labore? Nemo adipisci facere
        illo vitae beatae voluptatem obcaecati non error soluta fuga? Ex, sed?
        Nemo cupiditate veniam, laboriosam dolores neque alias aperiam
        voluptates praesentium quae minima repellendus illo molestiae beatae
        deleniti? Modi dignissimos tempore incidunt voluptatibus debitis
        pariatur blanditiis consequatur. Itaque dicta ipsa exercitationem ullam.
        Repellat, provident excepturi amet fugiat mollitia ad vitae sit sapiente
        repudiandae, ut nihil nobis quaerat asperiores optio impedit dolore,
        voluptatem corporis unde ipsa harum vel doloribus veniam. Voluptates
        pariatur quam minus possimus eveniet! Maiores quasi impedit vel facilis
        possimus beatae rerum consectetur nobis sint incidunt eaque, suscipit
        est libero eos dicta. Adipisci ullam dolor minus earum, sint enim totam
        dolores repudiandae esse suscipit sit omnis deleniti facere at ratione
        saepe quasi quaerat quia? Vitae qui quasi nesciunt saepe error nobis
        numquam similique dolor iste, totam, modi optio. Aperiam molestiae
        consequatur tempora, necessitatibus dicta est rem possimus quia, culpa,
        sunt ad. Ipsum non molestias eum autem, quidem corporis alias dolore
        sapiente est. Ipsam rem iste at, quia nemo eligendi veritatis iusto
        dolorum dolores eaque provident, ad repellat assumenda, facere illum a
        blanditiis possimus quidem placeat odit consequatur sit vel officia
        veniam! Debitis molestias nobis quaerat sequi voluptate optio non
        pariatur, corrupti sed velit libero accusamus est ex! Cupiditate amet,
        expedita odit voluptates fugiat ipsum illum commodi ipsa ratione
        assumenda recusandae veniam? Blanditiis debitis dolore in tenetur
        incidunt veniam, illo non necessitatibus soluta, deleniti at natus
        dolorum vero vel suscipit amet dignissimos. Illo vitae sed error
        assumenda tempore asperiores inventore consectetur dolor! Id, dolorum
        ea. Distinctio sequi itaque dignissimos consequuntur excepturi expedita
        quod! Libero assumenda eius, ipsa vitae dolorum at mollitia nihil unde
        quaerat nobis soluta esse ullam fugit temporibus excepturi et cupiditate
        quod, sit reprehenderit est neque tempore voluptates impedit voluptas!
        Nostrum beatae deleniti voluptatibus fugiat dolorem explicabo incidunt,
        ad eum eos cumque, non iusto officia optio omnis nisi nihil? Atque
        consectetur a molestias culpa aspernatur labore cumque reiciendis beatae
        consequuntur eum commodi consequatur, cupiditate, ad, cum mollitia!
        Sapiente deleniti laudantium quam provident.
      </p>
    </DefaultLayout>
  );
};

export default Home;
