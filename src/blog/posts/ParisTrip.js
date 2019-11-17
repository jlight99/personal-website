import React from 'react';
import './BlogPost.css';
import BlogMenu from '../BlogMenu';

class ParisTrip extends React.Component {
    render() {
        return (
            <span>
                <BlogMenu />
                <div>
                    <img src="/resources/paristrip/parismorning.jpg" alt="sunrise over paris" className="img-header"></img>
                </div>

                <div className="post">
                    <div className="title">paris trip</div>
                    <div className="blog-date">2019/08/22</div>

                    <div className="post-content">
                        <a id="day1">
                            day 1: arrival
                        </a>
                        <br></br>
                        <p>
                            our trip to paris started off with a red-eye flight, and we landed at charles de gaulle airport at 6am local time, just in time to watch the sun rise over the city of light. the rosy glow of light outlining the airport lent the place a magical feel.
                        </p>
                        <img src="/resources/paristrip/airport.jpg" alt="sunrise over paris airpot" className="post-img"></img>
                        <p>
                            fun fact: paris supposedly got its nickname, the city of light (<i>la ville-lumière</i>), because it was one of the first cities in europe to adopt street lighting in an effort to reduce night crimes, and more symbolically because it was a major birthplace of scientific and philosophical ideas during the Age of Enlightenment.
                        </p>
                        <p>
                            the airport itself though did not leave me with a great impression. the main thing that surprised me was how grubby it was. the floors were sticky, the facilities looked worn, and there was a sour smell in the air...
                            i also got to experience european washrooms for the first time. to use the washrooms in the airport, you actually had to pay to get in. there was an actual ticket barrier-like mechanism blocking the entrance, with a slot for you to drop euros in. as it turns out paid washrooms are pretty commonplace in europe, but having grown up in north america, i was pretty shook.
                            another issue was the sheer size of the airport. it felt like we walked for a solid half hour at least. i've visited a few airports before, but those airports were either small enough that walking between terminals wasn't really an issue, or of equal or greater size to the cdg airport, but with some more efficient intra-terminal transportation system in place, like a train travelling between terminals.
                        </p>
                        <p>
                            anyway, once we left the airport, things started looking up. there are several options to get from the cdg airport into the city.
                            one option is the roissybus, a direct bus that stops at several of the airport terminals to pick up passengers before driving straight to its destination of paris opera with no stops along the way.
                            another choice is the rer train, which is essentially a parisian express subway, and also travels between the airport and the city but makes stops along the way.
                            we opted for the roissybus since it was aboveground and we wanted to observe the city. a second reason was, based on what we read online, there were mentions that the rer train stopped at certain districts in paris that were reputed to be more sketchy, and we didn't want to take chances.
                        </p>
                        <p>
                            it was definitely a good choice. looking out the window as the bus drove into the city was probably the coolest part of the trip up to that point.
                            i was really caught off guard by how different the cars driving around on the road were. back in canada, a sample of a typical set of cars you'd see on the road are ford f150s, nissan rogues, toyota corollas, honda civics, hyundai elantras... essentially, pickup trucks, suvs, and passenger cars.
                            i saw none of those on the road. in fact, i barely recognized any of the brands of the cars on the road, let alone their models. the few mercedes and bmws speeding by and the toyota prius taxicabs reassured me that i wasn't entirely car-illiterate.
                            by the end of the paris trip though, i'd learned to recognize several of the main car manufacturers, including renault, peugeot and citroen (which are all, surprise surpise, based in france).
                            and it wasn't just the different brands and models of cars that surprised me, it was also the sheer size of the cars. there were fewer pickup suvs, almost no pickup trucks in sight, and the cars in general seemed a size smaller.
                            after some googling, i learned that the smaller car sizes in france may be an economical choice, to counteract the higher fuel prices in europe.
                        </p>
                        <p>
                            the roissybus dropped us off next to the paris opera, and we took a metro from there to our hotel. when we arrived at the hotel, it was still before check-in time, but the front desk was very accomodating and agreed to store our luggage. disburdened of our bags, we were free to walk around.
                        </p>
                        <p>
                            finding coffee was at the top of our todo list, since we'd missed a night of sleep and we could really feel it. so we gladly stepped into the first cafe we saw along the way. it was this nondescript little corner cafe that didn't look all that special from the outside, but their coffee was actually on point.
                            it was hands down the best the best coffee i've ever had in my life. and i say this as a person who normally doesn't even like coffee. the way the coffee was served was pretty cool too. we each got a cup on a tray with a spoon, and the cup was mostly empty, except for a bit of very concentrated coffee at the bottom.
                            along with the mostly-empty cup of coffee came a jug of warm milk, filled all the way to the top. from the stirring spoon on the tray, we deduced that we were meant to pour the milk into the cup to mix with the coffee. after finishing the cup of coffee, there was more than enough milk left over to drink another cup of milk.
                            the croissants too were heavenly. the best part was that they were served warm. the shell of the croissant was slightly crispy, but when i broke into the interior the folds were soft and buttery. i was also a bit surprised to see the croissants straight. i'd grown up eating costco croissants, which are crescent-shaped.
                            some online researched revealed that in fact, straight croissants are made using 100% butter, whereas curved croissants could be made with margarine or other butter substitutes
                        </p>
                        <img src="/resources/paristrip/cafe.jpg" alt="breakfast at cafe jussieu" className="post-img"></img>
                        <p>
                            i'd love to tell you about the adventures we had our first day in paris, but to be honest, even after the amazing coffee we were feeling the effects of sleep deprivation.
                            so that afternoon, once we officially checked into the hotel, we took a nap that somehow lasted until dinnertime.
                        </p>
                        <p>
                            for dinner, we decided on <i>le coupe chou</i>, a restaurant with an abundance of glowing online reviews and pictures of tempting dishes.
                            the restaurant seemed pretty out-of-the-way, not the kind of place you're likely to stumble across if you're just wandering around. the outside was quaint and quietly charming.
                        </p>
                        <img src="/resources/paristrip/lecoupechou/coupechou.jpg" alt="le coupe chou outside" className="post-img"></img>
                        <p>
                            when we stepped through the door, the first thing i registered was vivaldi playing softly in the background.
                            we were quickly seated and presented with menus. we ended up ordering:
                        </p>
                        <span className="menu">
                            <ul>
                                <li>
                                    <b>tartare de betteraves</b>
                                    <div>tartare de betterave à la crème de roquefort, brisure de pistache</div>
                                    <div><i>beet tartare with roquefort cream and pistachio pieces</i></div>
                                </li>
                                <li>
                                    <b>escargots de bourgogne</b>
                                </li>
                                <li>
                                    <b>steak français</b>
                                </li>
                                <li>
                                    <b>ratatouille</b>
                                    <div>ratatouille aux herbes de provence, burrata et pesto à l'huile de noix</div>
                                    <div><i>ratatouille with provence herbs, burrata, nut oil-based pesto</i></div>
                                </li>
                                <li>
                                    <b>crème brûlée</b>
                                </li>
                            </ul>
                        </span>
                        <p>
                            the first thing to arrive was, as per french tradition, the complimentary baguette pieces. they were warm, and their soft and stretchy feel clearly indicated that they were freshly baked.
                            in fact, after a week of eating free bread before every meal in paris, i've developed a theory: you can gauge the quality of the restaurant from the complimentary bread they serve.
                            part of it is how freshly baked the bread is, and the other part is just taking the time to warm the bread before serving it.
                            it’s really incredible what a difference it makes, to be savouring soft, warm, fresh, chewy bread, as opposed to struggling to bite into stale, hard, brittle bread.
                            it’s this attention to detail that sets fine restaurants apart.
                        </p>
                        <img src="/resources/paristrip/lecoupechou/breadsticks.jpg" alt="breadsticks" className="post-img"></img>
                        <p>
                            the baguette pieces also went very well with the escargots which were the next to arrive. the chunks of bread were the perfect sponges to soak up the delicious and mysteriously green garlic butter coating the snails.
                            when they brought the snails, they also brought tools with which to eat them. there was a pair of tongs that looked like scissors, and a small, thin fork. the design seemed to be to hold the snail in place with the tongs and fish out the meat with the fork.
                            but i was pretty bad at using the tongs, and the snail kept slipping, so i gave up and just held the shell still with my hand.
                        </p>
                        <img src="/resources/paristrip/lecoupechou/escargots.jpg" alt="escargots" className="post-img"></img>
                        <p>
                            our second appetizer, the beet tartare was also served at around this time. traditionally, a tartare is a dish consisting of minced raw beef or horsemeat.
                            the beet tartare we ordered was an imitation of the traditional tartare, and replaced the raw meat with ground beet.
                            the presentation was lovely. the pale roquefort cream contrasted sharply with the deep, rich purple of the beet and the fresh green leaves.
                            as for the taste... it tasted interesting, let me put it that way. that's not a it-tasted-bad-but-i'm-trying-to-be-polite interesting, but more a it-tasted-really-odd-and-i-don't-know-how-to-describe-it interesting.
                            beet has a very strong, dominating taste, and i wasn't too much of a fan.
                        </p>
                        <img src="/resources/paristrip/lecoupechou/tartare.jpg" alt="escargots" className="post-img"></img>
                        <p>
                            then came the mains. the steak français was probably the best steak I’ve ever tasted. the outside was fried nicely, the inside was soft (we ordered it medium done), the sauce and the potatoes all worked together to complete the dish.
                            there wasn't anything too fancy, just steak and potatoes, but i think the simplicity of the dish demands more of the chef. there was nothing to distract from the steak, so the chef couldn't rely on covering the dish with fancy decorations to conceal any shortcomings.
                        </p>
                        <img src="/resources/paristrip/lecoupechou/steak.jpg" alt="escargots" className="post-img"></img>
                        <p>
                            in stark contrast to the simple composition of the steak dish, the ratatouille we ordered had much more ingredients. eggplant, tomato, various peppers, and green onion were the ones i recognized, but i can't be sure that that's all of them.
                            funny story: when the ratatouille was first brought to us, i thought the white ball on top was a poached egg, and got really confused.
                            it turns out that the white pouch is actually the burrata, which wikipedia tells me is "a fresh Italian cow milk cheese made from mozzarella and cream", and more specifically, the outer shell is solid mozzarella, and the inside is stracciatella and cream.
                            the cheese by itself tasted a bit plain, but it complemented the tomato-dominated flavour of the ratatouille really well.
                            in fact, the entire ratatouille was amazing, and also a much-needed source of vegetables and vitamin.
                            also, i'd known about the existence of the ratatouille dish for a long time, thanks to the beloved disney movie ratatouille, so it was pretty cool to actual taste the dish in france!
                        </p>
                        <img src="/resources/paristrip/lecoupechou/ratatouille.jpg" alt="ratatouille" className="post-img"></img>
                        <p>
                            by the time we were done the entrées, we were both stuffed, but we made a valiant effort to finishing the crème brûlée.
                            i'd had crème brûlée once before, in canada, but it really couldn't compare to what the coupe chou served.
                            admittedly, we weren't able to finish the whole thing, but i enjoyed every spoonful i had.
                        </p>
                        <img src="/resources/paristrip/lecoupechou/cremebrulee.jpg" alt="crème brûlée" className="post-img"></img>
                        <p>
                            that night we headed back to the hotel, pleasantly stuffed. and thus began our week in paris!
                        </p>
                    </div>
                    <div>

                    </div>
                </div>
            </span>
        )
    }
}

export default ParisTrip;