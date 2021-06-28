import React from 'react';
import { connect } from 'react-redux';
import { List } from '@material-ui/core';
import PropType from 'prop-types';
import Todo from './Todo';

const createItems = (todos) =>
  todos.map((item) => (
    <Todo
      key={item}
      completed={item % 2 === 0}
      name="something to do"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ut iste eos assumenda voluptatem quod, repellendus voluptatum sint tempore eveniet culpa fugit sunt odit consequuntur enim obcaecati cumque accusamus perspiciatis id, ad tempora soluta distinctio nesciunt! Officia praesentium, asperiores labore hic perspiciatis porro culpa repudiandae ratione eaque aspernatur, aperiam quae dolorum quod natus, dolorem deleniti! Ex aperiam vel dolorum sed atque eaque qui debitis quas hic non perferendis sunt esse doloribus maiores sequi, explicabo ad harum eligendi voluptate repellat saepe labore! Quis, sed? Eveniet quos consequatur qui sit dolores assumenda, eos maxime? Accusantium atque hic totam harum voluptas corporis, nihil quod officiis sed ipsam magni in unde quas eligendi dolorum recusandae quibusdam consectetur, cumque voluptates deleniti dolorem dolore repellendus eum reprehenderit? Natus iure animi dolores culpa quasi, corrupti et minus obcaecati accusamus quidem sed praesentium odio beatae sapiente! A deserunt dolor amet, expedita ab aperiam vero ex odio ducimus sapiente laborum quidem similique facere? Eius illo cumque voluptatem, consequuntur blanditiis voluptas modi pariatur ipsa, qui eum excepturi voluptatibus ratione voluptates minima quod! Accusantium hic possimus reiciendis repellendus eligendi, unde voluptatem! Ducimus molestiae officiis, accusantium voluptatem numquam, ipsam pariatur earum neque, corrupti eos at optio sint culpa quasi beatae iusto quod perferendis! Porro asperiores aperiam suscipit ipsam consequatur fuga officia nemo doloribus illo possimus praesentium culpa saepe, magnam, eligendi quibusdam eveniet odit sequi rem in quisquam fugit nulla cupiditate? Esse numquam aut quisquam distinctio est nam, at obcaecati exercitationem, aliquam odio placeat? Veniam unde eum alias tempore sed nisi quia numquam ex asperiores beatae dignissimos, quas architecto excepturi quo neque sit quaerat magnam deleniti? Iste alias ducimus quae ad, odio non? Libero neque deserunt ex veniam, eveniet quis tempora commodi laudantium accusantium, aspernatur provident repellendus eligendi, animi esse in modi nam! Tenetur non dolore nobis quo maxime accusantium natus laboriosam beatae cum, incidunt necessitatibus aspernatur, deserunt fugit nihil corrupti similique. Eaque vitae tenetur earum voluptatum repudiandae doloribus veritatis at dignissimos eligendi, deserunt saepe error magnam quia voluptatem maiores soluta amet consequatur. Modi quidem reprehenderit alias est eum in aperiam! Eaque, doloribus est sequi velit obcaecati nisi maiores illo, repudiandae dolor repellat nulla eum. Quaerat a voluptas atque, cum et laboriosam aut similique aperiam odit doloremque voluptate voluptatum magni vero. Non dolore amet temporibus dolor, placeat expedita impedit possimus voluptatum ipsa velit reiciendis nobis ut quae sint quos necessitatibus exercitationem. Illum non quod doloremque autem nobis reprehenderit explicabo suscipit optio, vero impedit magnam porro distinctio dolorum, ullam veritatis! Hic, aspernatur itaque! Dolore ad qui explicabo quasi beatae libero rem perferendis voluptate, animi dolorum atque itaque debitis veritatis, veniam nostrum quam commodi magni consequatur repellat ipsam. Possimus placeat libero nihil facere eveniet aut voluptate, a aspernatur eum voluptatibus dignissimos assumenda modi impedit ut, quo est eius. Quae mollitia laboriosam deserunt aut eveniet dolor ratione nobis cumque architecto. Rem praesentium illo repudiandae neque vero sed ex eveniet ut, et odio non! Accusantium dolor voluptates repellendus deleniti voluptatibus, aperiam sit minus mollitia at nam sequi veniam iste illum maxime repellat itaque, quas debitis fugiat laudantium atque. Sapiente saepe fugiat aperiam suscipit doloribus repellat voluptate corporis similique vitae molestias, dolore tenetur sint nobis. Itaque quae minima sunt dolor, dicta a cumque! Ipsam asperiores quas cupiditate eum dignissimos commodi nulla, eaque nobis quisquam earum totam consectetur fugiat quod officia expedita voluptate esse quia dolores id debitis. Assumenda perferendis beatae nostrum voluptatibus delectus, officiis quo corrupti atque consequuntur dolore sint voluptatem laborum. Omnis non veniam iure nulla deserunt laboriosam, iusto officia a quibusdam aspernatur nihil, facilis cum animi reiciendis rerum odio architecto harum, quae libero? Mollitia exercitationem provident rerum iusto soluta ipsum, similique aut molestias error impedit ullam assumenda tempora doloribus excepturi quod magni ad, nihil nemo minus laborum consequatur quae enim iure! Esse repudiandae sunt doloribus modi harum, molestiae id voluptate dolores et ducimus fugiat magni mollitia distinctio! Ipsa fugiat dolorem rerum quo commodi at, ullam asperiores recusandae earum beatae iste aspernatur eum voluptatem laboriosam unde itaque officiis voluptate nihil doloremque. Soluta minima neque optio, laborum aperiam aspernatur iure aut sequi ipsum. Sed reprehenderit quod provident, repellendus vel accusamus temporibus! Perspiciatis quod nostrum enim, saepe rem corporis architecto doloribus unde voluptatibus praesentium cupiditate ullam fugiat deserunt inventore adipisci tempora iure magni, ea quidem. Perspiciatis nulla voluptas, consequuntur veniam obcaecati adipisci asperiores illo minus neque excepturi possimus laborum accusantium commodi alias dicta laudantium iusto distinctio est quas non. Dolore, aspernatur consectetur! Eos iste consequuntur accusantium, possimus distinctio aperiam, incidunt doloremque sapiente, saepe magnam laboriosam ex? Repudiandae consectetur alias minus rerum temporibus at eum distinctio accusamus, numquam beatae. Nobis accusamus esse necessitatibus. Delectus, facere. Facilis ea sit expedita nesciunt quae pariatur nulla iure fugiat nobis. Quaerat molestias doloremque autem eveniet debitis, voluptates, voluptatem asperiores ratione soluta deleniti repellat dolorum officia quidem, repudiandae iste rerum doloribus ab! Sed fugiat nam, odio fuga tempore culpa laborum eius architecto minus earum numquam!"
    />
  ));

const TodoList = (props) => <List>{createItems(props.todos)}</List>;

const mapStateToProps = (state) => ({
  todos: state.todos.values,
});

TodoList.propTypes = {
  todos: PropType.arrayOf(PropType.shape),
};

export default connect(mapStateToProps)(TodoList);
