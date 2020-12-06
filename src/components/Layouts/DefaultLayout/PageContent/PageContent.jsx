import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../../../Home/Home';
import Workflow from '../../../Workflow/Workflow';
import Statistics from '../../../Statistics/Statistics';
import Calendar from '../../../Calendar/Calendar';
import Users from '../../../Users/Users';
import Settings from '../../../Settings/Settings';

function PageContent(props) {
    return (
        <div className="pageContent">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab adipisci alias asperiores aspernatur aut debitis dicta doloremque doloribus ea enim, id inventore ipsam ipsum laborum magnam magni neque nisi nobis omnis pariatur perferendis, perspiciatis praesentium quae quibusdam quos recusandae repudiandae, saepe suscipit tempora velit veniam voluptatem voluptatum. Beatae et, ex nam necessitatibus nemo vitae. A accusamus aspernatur debitis error exercitationem id minus mollitia odit suscipit tenetur. Adipisci consectetur debitis et minima, modi molestias mollitia necessitatibus officia praesentium reiciendis, totam, voluptatem. A architecto aut eaque eius quis quos repellendus similique veritatis. Ad, beatae consectetur deserunt dolor dolorem dolores est explicabo fugiat iure laudantium molestias nam nisi nobis odit optio perferendis perspiciatis placeat quam quia quidem sapiente sed sequi sint sunt totam unde voluptate voluptatem? Ab aliquam animi assumenda blanditiis consectetur cum deleniti, dicta dolorem dolores ducimus eius enim est, et hic impedit inventore itaque magni minima neque nostrum obcaecati officia, officiis praesentium quae quo sint unde vel velit vitae voluptate! Accusantium aperiam beatae consequatur cum dolor ducimus eaque est eum facere harum id illum, incidunt libero molestias nam nobis nostrum nulla obcaecati officia perferendis perspiciatis provident quasi qui quia quibusdam quos repellat reprehenderit sequi tempore temporibus, totam voluptas voluptate voluptatum?
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/workflow" component={Workflow} />
                <Route path="/statistics" component={Statistics} />
                <Route path="/calendar" component={Calendar} />
                <Route path="/users" component={Users} />
                <Route path="/settings" component={Settings} />
            </Switch>
        </div>
    );
}

export default PageContent;