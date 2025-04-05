import {motion, useScroll} from "framer-motion";


const ScrollAnimations = () => {
    const { scrollYProgress } = useScroll()
    return <>
    <motion.div
    style={{
        width: '100%',
        height: '10px',
        background: 'lightblue',
        scaleX: scrollYProgress,
        transformOrigin: 'left',
        position: 'sticky',
        top: 0

    }}>

    </motion.div>
        <div style={{
            padding: 15,
            textAlign: "justify"
        }}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor harum dignissimos ad iusto saepe ipsa, nostrum repellendus provident Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, magnam. Atque fugit ex aspernatur dolorum placeat modi soluta harum odio eaque commodi eius incidunt dignissimos asperiores, deserunt quo vel numquam.
            Dicta laudantium omnis, quam quisquam error eligendi commodi fugit atque a sunt nobis. Nesciunt aut alias totam! Officiis similique architecto id, eaque omnis distinctio doloremque deleniti dolores at quam. Quod!
            Sed accusamus, aliquid id animi, repellat rerum molestias, doloribus obcaecati reprehenderit unde exercitationem voluptates est. Recusandae maiores magni pariatur in laudantium, a facilis eaque officia cumque quibusdam dolores minima placeat!
            Ratione, perferendis porro aspernatur laudantium totam deserunt praesentium expedita? Dolor tempore iste repellat sit deleniti deserunt a debitis veritatis dignissimos, voluptatibus, aliquid voluptates temporibus minima, in nihil! Quaerat, temporibus optio!
            Saepe quae voluptates sed cum quam labore. Totam dolor dignissimos laboriosam id praesentium modi suscipit necessitatibus magnam repellat quaerat repellendus amet at harum reprehenderit autem, commodi velit maiores dolores ducimus?
            Pariatur distinctio odit sint eligendi sed iusto vero corporis repellat? Tempora quaerat, voluptatem quia exercitationem eos, impedit dolor ducimus molestias unde, repellendus quisquam quos repellat obcaecati placeat doloribus ipsam quas.
            Nobis quis, beatae sequi consequatur hic, reiciendis perferendis libero id labore nesciunt alias corrupti a eveniet sint dolor. Quasi ea suscipit adipisci quod repellendus earum optio aspernatur ipsum dolore. Ad.
            Magni pariatur incidunt rem nihil ab accusamus, veritatis deleniti consequuntur quia ea tenetur obcaecati velit numquam beatae maiores sed iusto, facere asperiores quis facilis dicta quos totam repellendus! Ad, ipsam!
            Tempora aspernatur iusto temporibus harum exercitationem modi ut repellendus inventore nam voluptatum eos iure in quis necessitatibus fugit sunt, voluptates laudantium? Veritatis cum quod qui fugiat quisquam ducimus harum fugit.
            Id, ab? Odit officiis praesentium necessitatibus maxime? Ea ducimus veniam, beatae libero voluptatem dolores soluta ipsam dolorum culpa tempore temporibus corrupti magnam id, atque ut quam quos. Quibusdam, ad enim.
            Accusantium itaque soluta alias incidunt suscipit temporibus magni quibusdam, odio sit unde laborum expedita, placeat quo mollitia quis sed! Alias commodi neque accusantium eius, voluptatibus eos nostrum nulla voluptatem deserunt!
            Eligendi perferendis itaque, labore, minus aspernatur maiores in pariatur molestiae obcaecati quo corrupti necessitatibus facere laborum impedit. Placeat, dicta? Fugiat officia animi eum, nulla repellat molestias quasi dignissimos ipsa provident!
            Magnam officiis unde nulla consectetur? At, debitis sed. Vitae, commodi cum nemo aspernatur quos, quibusdam accusantium reprehenderit non dolor voluptates maiores reiciendis corrupti doloribus quaerat accusamus delectus libero porro numquam.
            Debitis cupiditate eaque odit molestias amet quidem consectetur aut, earum, quae aliquid vitae illum incidunt, cumque inventore placeat dolores libero fugiat a voluptate! Quisquam quis sequi soluta ea ipsa consequatur?
            Tempore, velit. Dolor, voluptatibus itaque! Et voluptatem error nihil, quam ut eligendi labore dolor eveniet ipsam laborum ducimus velit illo omnis debitis tempore? Magni consectetur accusantium iusto. Rerum, repudiandae! Sed! necessitatibus aliquid illo sed impedit obcaecati a aliquam temporibus totam cum consequuntur?
            </p><p> Quia dolor ab dignissimos nulla adipisci porro. In corrupti enim nemo Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, eligendi dicta laudantium quibusdam earum ipsum fuga, laborum suscipit, quidem provident repellendus beatae perspiciatis delectus cum tempore eos distinctio ut nihil.
            Laborum sit fuga eos ex, aperiam odit ratione impedit recusandae aliquid natus molestiae officia asperiores. Quibusdam, odio qui cumque quaerat minus molestias illum architecto, nulla quidem necessitatibus laboriosam fugit eligendi?
            Id eos, delectus dolores quaerat unde maiores veritatis, quidem voluptatibus cum aspernatur adipisci molestias molestiae dignissimos libero quia impedit voluptatem alias excepturi ab similique soluta nihil ipsum? Animi, quam error.
            Nisi cumque distinctio placeat, voluptates doloremque veniam blanditiis? Totam tempora ea suscipit quae ducimus tempore error facilis numquam deleniti, aliquam quis provident nesciunt accusamus dolore similique dignissimos officia corrupti at?
            Sit, ducimus saepe incidunt fuga vero doloribus facere quaerat, obcaecati velit temporibus praesentium minus. Cum, ut maxime cupiditate, dicta quaerat corporis delectus adipisci doloribus iure impedit expedita, consequatur omnis voluptate!
            Illo magni odio, corporis enim sint molestiae reiciendis nobis amet odit fuga consectetur distinctio, obcaecati nisi, ratione sequi aliquam tempore quos. Doloribus accusamus dolore aliquid excepturi porro vel quisquam sapiente.
            Recusandae tempora hic omnis, fugit dolorem numquam distinctio delectus vel natus assumenda impedit quod consequuntur ab dolor! Blanditiis, perspiciatis enim! Aperiam minus quo magnam perferendis voluptate tempora nesciunt voluptatibus reiciendis?
            Fugiat distinctio sapiente cupiditate ipsum nihil blanditiis quaerat molestiae, laboriosam sit voluptate provident harum aut consequatur illum nesciunt, atque facere modi ex a doloribus quisquam quidem. Illum iusto quam sit.
            Distinctio in ullam explicabo numquam, fugiat voluptas hic porro doloremque doloribus laudantium expedita exercitationem quasi labore nisi aperiam animi consequatur cumque quisquam? Saepe vel eius consectetur ullam beatae. Eligendi, ab!
            Beatae, aspernatur. Voluptatibus odio dignissimos, voluptate, laborum ab reprehenderit totam necessitatibus eaque, dolorem porro placeat sunt quia veritatis optio nostrum? Nobis modi cupiditate odio dolorem ut! Provident quas iusto in?
            Numquam rem laborum earum aliquam quod non tempora voluptatum. Eaque ducimus a consequatur facilis. Quas illum autem alias repellendus, unde voluptate hic natus vel fugiat. Ea dolore unde aliquid est? eligendi beatae quam recusandae rerum soluta animi, earum optio? Voluptas, expedita. Eaque at consequuntur exercitationem, iure nisi veritatis fugiat?
            </p><p>Debitis Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sed modi nobis pariatur atque exercitationem harum sit, possimus impedit voluptatem, fuga ullam quas quia et qui quaerat officiis rem consequuntur!
            Numquam eaque soluta maiores suscipit necessitatibus? Fuga similique aperiam perspiciatis hic autem voluptas eligendi, odio corporis eveniet laboriosam. Cumque repudiandae ipsum harum, quibusdam alias corrupti rem sint blanditiis itaque! Debitis?
            Illo tenetur reiciendis sit optio modi facilis, suscipit nulla repellat veniam asperiores, est error aperiam. Fuga veniam ipsa ullam perferendis eveniet, animi quis ad, perspiciatis necessitatibus blanditiis voluptate architecto voluptatibus!
            Maiores animi ullam nisi quam dolorum veniam quo, aspernatur labore, cupiditate itaque optio amet quaerat non, pariatur minus saepe voluptates laboriosam laudantium dicta ut! Atque officia cumque qui officiis vel?
            Voluptate dolores quisquam debitis, dolor sed nisi sequi unde praesentium dignissimos voluptas incidunt delectus magni nihil aut corrupti itaque perferendis voluptates illum neque quod magnam hic! Facere autem voluptas laudantium?
            Facilis nobis quae architecto consectetur neque dolores corporis similique vero ipsam ipsa qui culpa illum, fugit possimus animi reprehenderit perspiciatis temporibus omnis doloribus autem eligendi illo ad aperiam necessitatibus. Exercitationem?
            Necessitatibus, odit quidem quae, numquam accusantium praesentium quo atque repellat exercitationem, excepturi id sint. Explicabo, quo? Quia tenetur porro illum ullam praesentium voluptate odio, soluta suscipit voluptas quo adipisci doloremque?
            Temporibus, fuga! Ipsum nihil distinctio ipsam exercitationem doloremque vitae harum dolores nostrum deleniti recusandae porro officiis magnam sint, vel, officia odit temporibus alias a in? Fuga unde dolorem nostrum illum.
            Blanditiis vitae quasi ipsa debitis accusamus natus exercitationem beatae unde, at suscipit quibusdam aperiam cupiditate voluptas facilis officiis aspernatur assumenda sit sapiente commodi veritatis. Reprehenderit, fuga sequi. Ab, corporis fuga!
            Sapiente reprehenderit assumenda officia? Beatae reiciendis praesentium animi quod soluta necessitatibus voluptas eum, id quo! Nisi earum cum autem atque quisquam, saepe eveniet? Eius, aperiam. Porro nam sequi corporis consequatur. minus nulla fugit deserunt necessitatibus assumenda ipsam quod laborum eum! Reprehenderit dolorem laudantium tempora amet consequatur unde voluptas magni minima molestiae iusto, doloremque totam cupiditate voluptatum similique sit? Dolorum.
            </p><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolorem sequi, fuga corporis, ex ipsam deserunt at commodi iste quo perferendis soluta assumenda inventore ipsum esse repudiandae sunt, amet impedit!
            Eos praesentium ad ullam fuga consectetur unde architecto nobis. Error quo quibusdam asperiores molestiae velit! Omnis, veniam a odio maxime quo veritatis dolores obcaecati asperiores voluptatem, quisquam dignissimos id sint!
            Temporibus dolores dolorem, dolorum nostrum perspiciatis nesciunt accusantium veniam fugiat reiciendis similique iste ipsa cum quidem quia mollitia sapiente delectus! Ab, quasi laboriosam optio esse voluptate placeat accusantium animi harum.
            Atque assumenda adipisci dicta, voluptatum, sequi quia nostrum in ducimus cupiditate eum molestias obcaecati laudantium totam debitis doloribus magni quibusdam quisquam excepturi vel et sunt eos eaque doloremque ut. Deleniti?
            Quaerat, qui! Eius quidem id eveniet laudantium molestiae, voluptas eaque illum deserunt qui odit, neque amet nam nihil magnam et. Fuga molestiae eveniet atque voluptas pariatur sunt, illo eaque eum.
            Ipsam ipsa labore molestiae perferendis, facere ducimus odio ex sunt ratione tempora nemo deserunt tenetur molestias laudantium eligendi! Architecto aliquid porro praesentium laboriosam aspernatur nihil quos possimus repudiandae facilis voluptates.
            Voluptate sapiente commodi maiores amet recusandae. Repellat odio cupiditate corrupti eaque nostrum, molestias in voluptates recusandae omnis mollitia tenetur accusamus architecto perferendis praesentium? Assumenda quidem error veritatis aspernatur, delectus numquam.
            Maxime et quas maiores ea sit molestiae cupiditate atque hic, sunt facere est labore laudantium quis, rem soluta dignissimos repellendus vero quidem eius perferendis explicabo! Voluptas facere pariatur dolorum aspernatur?
            Vero, nam, quasi fuga est deserunt a officia, harum eum expedita illum libero ad numquam nostrum ducimus at. Est numquam porro exercitationem nesciunt odio corrupti id ipsum quae ad facilis?
            Repellat sint consequatur, eveniet impedit corrupti qui maxime hic delectus corporis aliquid laboriosam magni aliquam culpa eligendi! Harum officia at ducimus doloribus repellat. Repellendus animi, reiciendis quibusdam dignissimos dolore similique.
            Quos consequuntur ipsum delectus laboriosam, nostrum minima asperiores illum sequi nemo tenetur id molestiae natus corrupti harum quia reprehenderit error eius corporis mollitia sit enim autem perspiciatis illo ut? Dignissimos.
            Cupiditate, porro. Labore sunt corrupti ratione debitis libero dolore aliquam excepturi ad nam. Ab neque voluptates vel amet iste deleniti maxime, dolor quas rem inventore nemo beatae? Obcaecati, reprehenderit. Velit? Illum neque minus saepe voluptate modi, perferendis eligendi nobis quae enim vero quidem, assumenda ad officiis quia maiores dicta aliquid. Sit, eaque dignissimos? Nulla quidem magnam, deserunt cupiditate corrupti doloribus.
            </p><p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ipsum, veritatis eveniet ullam minima, doloremque deleniti quaerat quos aliquid harum sit! Ad in omnis quam, impedit natus dolorum quis perspiciatis.
            Magnam reiciendis laborum quibusdam, dignissimos ducimus facilis necessitatibus totam eius similique provident vel dolor, quis saepe deleniti optio voluptatibus quidem? Excepturi blanditiis quisquam, assumenda numquam nostrum ad voluptates quibusdam magni!
            Corporis aspernatur ipsam unde. Error consectetur, iure, quo autem tempore qui est neque voluptates quidem explicabo laudantium doloribus ad nemo officia recusandae amet deleniti quisquam eaque quas optio suscipit atque!
            Porro illum libero impedit id, saepe debitis accusantium ex cum modi unde, neque dolorem, inventore ab laudantium ea harum at placeat quisquam. Veritatis, natus at. Obcaecati iste facere dolores aut.
            Velit iste temporibus dolore, tempore sapiente officiis ad quod, reprehenderit asperiores voluptates hic a molestias esse officia ea nemo ex? Eum enim quis sint saepe facilis quam quae iste est.
            Delectus officiis hic nihil, necessitatibus inventore tenetur dolorem nostrum reiciendis sapiente sint suscipit maxime veritatis perspiciatis soluta odit veniam quo labore cupiditate nisi aliquid dolorum eaque totam impedit praesentium. Rerum.
            Eius autem adipisci beatae recusandae, inventore illo quo, maxime in possimus officiis non fugiat accusantium quidem amet vero? Excepturi quam fugit quas facilis magnam voluptatum magni quidem non, ducimus commodi!
            Praesentium officia, sint perferendis, nemo labore fuga odit, autem quibusdam delectus numquam molestiae eaque! Veniam dolorum, animi quaerat ab officiis praesentium esse totam beatae ullam eum possimus aut quae odio!
            Soluta hic, voluptates iure reiciendis, velit facilis necessitatibus sequi aliquid quod non obcaecati error doloribus dolore iusto fuga earum quas atque impedit accusantium nesciunt ullam, explicabo laborum. Ullam, nulla deserunt!
            Quia delectus repellat ad explicabo? Sint nihil inventore maxime dolorum et magnam numquam temporibus deserunt quisquam commodi saepe animi, cumque nemo tempora libero alias. Provident ab et illum libero nesciunt?
            Iste incidunt qui illum sequi recusandae, autem fugiat dicta delectus voluptas maiores odio nobis omnis neque quia unde veritatis iusto non aliquam sed earum consequuntur. Saepe vel repellat perferendis est.
            Magnam ad veritatis sit voluptate neque corporis nihil ut explicabo voluptas nulla nostrum cum velit accusantium tempore id asperiores sint alias voluptatibus accusamus, saepe odio facere. Quia modi asperiores totam!
            Incidunt, debitis. Porro ratione accusantium assumenda, nulla aut obcaecati recusandae? Velit cupiditate mollitia fuga consectetur, nobis necessitatibus architecto amet praesentium laborum delectus nesciunt nemo sint illum voluptates corporis. Nam, tenetur.
            Labore fugiat sint temporibus enim? Impedit ipsum eius quo provident, inventore, facere doloribus eum quia voluptatem amet dolore sequi? Voluptatem tempore suscipit tenetur nisi ipsam dignissimos debitis, illum ullam similique.
            Quas numquam deserunt mollitia nulla? Hic culpa maiores voluptatum? Quam, incidunt. Repellendus quos corporis suscipit? Sapiente sunt eveniet exercitationem atque, nulla quo distinctio recusandae deserunt et ea sed enim dignissimos.
            Harum porro sed accusantium, vel, ipsum labore aperiam enim ipsa, animi ab assumenda aspernatur dignissimos deserunt? Aliquid id soluta fuga eius minus iure beatae, harum, itaque quisquam accusantium deleniti aperiam.
            Consequatur, assumenda. Autem reiciendis beatae nemo quaerat. Accusantium cupiditate neque nihil impedit non delectus eos magni, reiciendis voluptate asperiores beatae eligendi rerum fuga minus quaerat explicabo veniam voluptatibus nulla odio.
            Ducimus, quae harum non, illo placeat ipsum nihil tenetur a debitis asperiores iure minima. Nam corrupti quas laboriosam eveniet minima rem magni sit cumque mollitia, sed veritatis suscipit tempore doloribus!
            Aliquam veritatis soluta numquam odit non accusantium corrupti praesentium dicta nostrum. Corporis unde sit consectetur, sapiente itaque, atque error quis obcaecati explicabo, quidem dignissimos cumque quae ipsa non dicta ipsum. Velit esse magnam, enim deleniti consequuntur voluptatibus fugiat quia quaerat sequi commodi culpa dicta quos, tenetur exercitationem dignissimos porro nisi quibusdam autem sint pariatur dolorem, natus ullam ipsum tempore. Consectetur?
            </p> <p>Obcaecati eum nemo consectetur nisi quaerat sint expedita laborum quam velit laudantium! Nostrum maiores quae officia aut labore ullam ipsa officiis assumenda atque nisi, unde maxime, quod repellendus hic nobis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque illum facilis, sunt officiis id ipsam distinctio aut pariatur est fuga enim magnam aperiam, aspernatur reiciendis quidem ab deserunt nobis asperiores!
            Soluta doloremque est aut adipisci nisi hic quidem qui fuga. Iure quidem omnis iusto deserunt, aliquid minus fugit quia impedit officia labore fugiat enim commodi, esse voluptatum temporibus facilis veniam.
            Dignissimos harum ullam sequi consequatur, suscipit sed eum vero quod officiis tempora magnam unde aliquid repellat, quos voluptatem doloremque corrupti! Vitae saepe officiis non accusamus nobis quo perferendis pariatur quaerat.
            Molestias ducimus asperiores modi, neque nihil at nulla illum iure debitis possimus perferendis minus inventore vel amet a, sunt facilis aspernatur assumenda veritatis hic, nostrum maxime quidem. Ullam, quas ab!
            Ab eaque consequatur dicta minus voluptatibus nemo sunt, eum molestias quasi natus omnis maxime qui dignissimos quisquam suscipit impedit, ratione harum non cum distinctio doloremque consequuntur sit obcaecati. Accusamus, assumenda.
            Ut inventore numquam sint, dicta officia velit expedita atque odit molestiae dolore quia amet aut laudantium magnam nobis maxime facilis assumenda nam minima quod voluptatum harum debitis architecto. Rerum, possimus.
            Tempora, mollitia explicabo at blanditiis modi voluptatibus est sunt quod unde atque eos? Dolores, iure! Totam tempora provident veritatis impedit excepturi ipsam odio, sint qui accusamus deleniti quam, laborum voluptas!
            Eius debitis magnam in a quia sit qui beatae expedita veritatis, aliquid officia ratione, nam vero! Quis doloremque labore ratione unde temporibus facere esse quo quasi distinctio! Pariatur, veniam quo.
            </p></div></>
}

export default ScrollAnimations;