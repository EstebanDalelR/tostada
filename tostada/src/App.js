import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Tostada</h1>
        <main>
          <section className="buttons">
            <button onclick="showToast()">Show toast</button>
            <button onclick="showToastWithStyle()">Show toast with <i>style</i></button>
          </section>

          <section className="lorem">
            <article>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut praesentium esse earum eum perspiciatis quas nesciunt hic iure? Molestiae magni quos sit aliquid libero reiciendis facere autem ratione cum eius.
              Explicabo nulla odit fuga quisquam magnam deserunt, quia sint facere libero assumenda consectetur pariatur natus officiis id ab debitis corporis. Assumenda, omnis accusantium qui aperiam suscipit deserunt nihil quia minus?
              Iste deserunt nesciunt voluptates. In obcaecati possimus culpa suscipit. Nisi rerum minus laudantium voluptate corrupti deserunt assumenda repellendus facere quasi iusto fugiat quibusdam explicabo, consectetur maiores natus, distinctio et ratione.
              Consequatur aperiam amet perspiciatis tempore. Facere quidem ex velit accusantium repellendus ipsam possimus vel cupiditate. Tempora tenetur quisquam rerum sit ipsa. Facilis blanditiis ratione cum, corporis incidunt maiores minus harum!
              Fugiat natus at, dolores, molestiae facilis repudiandae porro illum, ipsum praesentium ducimus quod nesciunt id maxime deserunt! Ullam, tempore ad necessitatibus asperiores atque cupiditate! Iste consequuntur atque ea quos doloribus!
              Vitae explicabo, tempore perspiciatis qui blanditiis maiores officia. Odit saepe eligendi exercitationem ratione? Impedit odio neque ipsam iure a error optio. Ea libero quod nesciunt accusantium, mollitia neque dolore explicabo.
              Excepturi, nobis. Veritatis id, magnam nobis debitis optio, corrupti unde soluta expedita doloribus earum harum asperiores exercitationem in atque! Aperiam voluptatem voluptas alias, quis ea debitis ducimus rem eaque officia?
              Magnam laboriosam accusamus dignissimos repellat animi, cum quisquam. Quia rerum enim ipsum ipsam ex, id hic quisquam, debitis soluta officiis perspiciatis? Vitae quia ipsam facere non similique voluptates facilis consequatur.
              Quas recusandae iste consequatur nesciunt doloremque eius sunt impedit molestiae, obcaecati eligendi, quisquam ipsa reprehenderit debitis suscipit harum magni officiis dignissimos, dolore quia dolorum itaque? Inventore quaerat ab qui voluptates!
              Quia vel neque perspiciatis autem modi illum non quis ipsa eos! Laborum ullam eveniet eum fugit id aliquid explicabo natus, molestiae in, animi quibusdam minus iure culpa! Eos, reiciendis officia?
              Aliquid sit numquam necessitatibus? Beatae animi porro ducimus unde rem? Accusamus illum ipsam itaque velit quos saepe. Excepturi nulla sed eligendi architecto, eveniet velit necessitatibus alias aliquam repellendus illo exercitationem!
              Quam maiores laboriosam amet pariatur enim quasi suscipit facere voluptate at ipsa. Consectetur vero sit, quidem iste commodi pariatur dignissimos, obcaecati delectus dolorum mollitia recusandae perspiciatis, fuga quasi nulla animi?
              Sint quidem itaque et eligendi rem, consequuntur aspernatur illum doloremque blanditiis suscipit minus, dolorum natus. Itaque asperiores quas rerum deleniti suscipit. Iure quae, id nulla sint itaque ullam nostrum maiores!
              Similique dolorem doloribus sequi corrupti minima ducimus. Cumque fuga dolor vero reiciendis! Odio provident rem iure! Reiciendis alias veniam nostrum. Ab enim, esse aspernatur unde tempore nobis aliquam. Ex, eius.
              Laudantium eaque dicta labore sint iure commodi magni odit consequuntur architecto laboriosam aut nostrum, iste sit qui natus voluptatibus repellendus. Quas fugit eius vero. Molestias error ipsum quis voluptatum quae.
              Iusto necessitatibus accusantium minima molestiae obcaecati deserunt facilis quisquam omnis dolores repudiandae fugit atque cupiditate at error nemo quaerat, distinctio tempore beatae illo illum exercitationem pariatur iure similique ab. Cupiditate.
              Voluptatibus adipisci sit, eligendi deleniti vero, magnam consectetur odio nesciunt distinctio aliquam quae delectus nobis nulla quia assumenda, mollitia quos cupiditate cumque quaerat temporibus aperiam ipsam? Assumenda eveniet libero debitis.
              Placeat quam ducimus molestiae repudiandae inventore mollitia, esse veritatis nisi dicta nobis, sint rem alias. Sapiente, magnam beatae aut illo, consequatur distinctio a eos esse perspiciatis doloribus pariatur rem numquam!
              Autem accusamus, inventore corrupti iure veniam assumenda eaque alias nulla sapiente ducimus itaque ratione eligendi harum animi a dolorum iste blanditiis! Nesciunt fugiat et recusandae similique repellendus architecto temporibus delectus!
              Veritatis consequuntur natus ex ullam consectetur incidunt impedit perspiciatis veniam corporis ut blanditiis molestias maiores dolorem ad earum nesciunt explicabo, magni quisquam. Dignissimos tempore magnam saepe suscipit quo. Quis, sequi?
            </article>
            <article>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque qui tenetur illo commodi reprehenderit enim, assumenda minus vitae facilis, aliquid sit beatae, earum explicabo ut obcaecati culpa omnis fuga repellat.
              Sit optio architecto sapiente incidunt minima ipsum quos ex fuga labore ipsam similique quidem, quia, ratione ad repellat, corrupti nobis sint obcaecati saepe officia laudantium fugit. Ex harum laboriosam illo?
              Impedit, optio porro quod excepturi vero eligendi libero odio eius explicabo aperiam esse delectus harum pariatur eaque facilis nulla reiciendis, placeat nam ipsum commodi veniam non doloremque autem. Nesciunt, odio!
              Tenetur dolorem sit nisi quibusdam ab consectetur, atque consequuntur neque doloribus molestias fugiat culpa. Iste harum optio dolorum perferendis laboriosam quis nihil repellendus saepe nostrum adipisci vel, sunt eum debitis.
              Nemo voluptates fuga, qui amet quisquam dolorum suscipit id voluptatum quae labore officia, perferendis, iusto animi? Vitae assumenda id, veniam inventore vel possimus. Velit, debitis mollitia? Ipsum temporibus aspernatur mollitia!
              Impedit doloribus nam in amet quae dignissimos vitae excepturi minus eveniet praesentium sint, ab aliquid laudantium dolores debitis beatae ut dolor. Perferendis ipsam sed et aspernatur porro recusandae culpa similique!
              Quia aperiam perspiciatis, natus a quas unde ex minima eaque saepe tenetur fuga alias earum corporis ut, aliquam nihil ad libero quae suscipit tempora rem optio. Voluptatibus rem minus vel.
              Corporis nobis consectetur eaque animi quas iure necessitatibus corrupti rem magnam possimus harum quaerat, odit iste quasi eum itaque illum et delectus laboriosam? Pariatur commodi eaque nemo velit maiores nulla?
              Cum corrupti mollitia nam, ipsum at rerum alias, voluptatum rem laborum ad animi soluta eos, quo facere placeat id sapiente obcaecati inventore et! Quisquam impedit nostrum omnis iste facere architecto!
              Dicta labore possimus qui, nobis asperiores recusandae esse dolor aut eligendi ipsa corporis nihil necessitatibus perferendis. Reiciendis natus rerum dicta ipsam sit. Impedit molestias, ipsa voluptatum expedita eaque dolorum ducimus.
              Similique inventore ipsum veniam error aspernatur sapiente, quidem enim deleniti, corrupti velit doloribus dolores ad alias vero dignissimos. Facere omnis eum animi labore officia numquam cumque veniam molestiae ipsum rerum!
              Fugiat exercitationem, animi soluta obcaecati nam nostrum vero, recusandae eius, illum veniam est? Ipsa explicabo corrupti fuga eaque consequatur nulla corporis et eveniet voluptatum. Sapiente minima officiis laboriosam similique aliquid?
              Rerum nobis possimus eveniet sequi commodi cum ab magni error illo quisquam consequatur enim earum incidunt eos dolores cupiditate, aliquid accusantium tempora suscipit numquam praesentium eligendi. Velit, doloremque porro? Ab.
              Tenetur, odio illum deserunt molestiae, ut vero tempora explicabo nam voluptates dolores nostrum ipsum hic earum neque recusandae fuga harum sapiente nesciunt molestias adipisci voluptatibus inventore. In atque dignissimos quo?
              Beatae voluptatibus optio quisquam nostrum at, voluptatum nihil repudiandae aliquam magnam placeat in minima? Corrupti, ex pariatur temporibus, nihil dicta error nam repellat libero ratione unde atque accusamus laudantium possimus?
              Deserunt saepe btatem, quae odio, vero delectus excepturi quo pariatur quis error quas dolor blanditiis corrupti nihil veniam velit totam? Aperiam mollitia deserunt, ratione assumenda doloremque ea praesentium tenetur eligendi.
              Reprehenderit odio in numquam, quaerat quis veniam, quibusdam voluptatem nihil ipsa, laboriosam maiores obcaecati sapiente corporis recusandae? Voluptatum perspiciatis vitae autem porro mollitia quos pariatur totam, accusamus deleniti quibusdam neque!
            </article>
          </section>
        </main>

      </div>
    );
  }
}

export default App;
