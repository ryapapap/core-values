import React, { Component } from 'react';
import './App.css';

// quote="Do not be embarrassed by your mistakes. Nothing can teach us better than our understanding of them. This is one of the best ways of self-education"
// author="Thomas Carlyle"

function Quote(props) {
  return (<div>
  <div className="quote">
    {props.children}
  </div>
  <div className="author">
  — {props.author}
  </div>
</div>);
}

function Explanation(props) {
  return (<div className="explanation">
    {props.children}
  </div>);
}

function Definition(props) {
  return (<div className="definition">
    <div className="defined">{props.defined}</div> — {props.children}
  </div>);
}

class Tile extends Component {
  propTypes = {
    color: React.PropTypes.string,
    title: React.PropTypes.string,
    quote: React.PropTypes.string,
    author: React.PropTypes.string,
    explanation: React.PropTypes.string
  }
  state = {
    front: true
  }

  render() {
    return (<div 
      className={`Tile ${this.props.color}`} 
      onClick={() => {this.setState({ front: !this.state.front})}}
    >
      <div className="Tile-Content">
          <div className="Tile-Title">
            {this.props.title}
          </div>
          {this.state.front ? 
            this.props.children[0]
          :
            this.props.children[1]
          }
      </div>
    </div>)
  }
}

/*
When I think about work, I think a lot about the processes that guide it. 
I created this list to document some of my thoughts about what guides me.
It's not meant to be complete or make sense for every situation, but I do
believe that everything that's listed here is important and resonants with me.
Processes should follow objectives? I want processes like these?

CSS flip these cards?
Need more responsive stuff

--
communication and building. looking at objectives. understanding that step backwards are painful ??
willingness to let go of my own ideas and focus on different aspects ???
More than just moving fast. Willingness to change direction. That I like building things (and fast).
*/

class App extends Component {
  render() {
    return (<div className="Tile-Container">
        <Tile
          color="Purple"
          title="Core Values"
        >
          <div>
            <Definition defined="core">
              the central or most important part of something.
            </Definition>
            <Definition defined="value">
              a person's principles or standards of behavior.
            </Definition>
          </div>
          <Explanation>
            I made this site because I think it's easier to make decisions when they're based around something, or at least can be measured against something. Often I'll ask myself what I should be doing, or what I want to be doing, or why I'm doing something. And these are tough questions. I don't think I can answer them authoritatively (and I don't think I'd want to). But I do want something I can consider so that when I'm trying to answer these questions, I have something to help guide me. The following are a list of values that I've reflected on and consider important to me and the type of work I want to be doing. This isn't meant to be a complete list of everything that I find valuable, it's just what I came up with when I was thinking about it this time. Maybe if you ask me now (at the time you're reading this), my answer would be different, but for this moment (the one where I'm writing this), these are some ideas that I resonate with very strongly.
          </Explanation>
        </Tile>
        <Tile
          color="Red"
          title="Empower others"
        >
          <Quote author="John Ruskin">
              Look at all your knowledge as a gift, as a means of helping other people.
          </Quote>
          <Explanation>
            I think the coolest part about computers is the way they've revolutionized just about everything. I don't think it's always good-- how easy it is to be endlessly distracted, addicted to the endless content, or living in an echo chamber all seem bad to me. But the good it's created has been enormous; things like making completely new and novel experiences, connecting and sharing seemingly infinite amounts of knowledge, the sheer amount of calculations and efficiency its given. I'm in awe of these and very much want to be creating things in this tradition. I think the best thing I can do with technology is help other people, either to do something they could never do before or to do something much better than before. Technology gives us the ability to control more than we could alone and that's very powerful.
          </Explanation>
        </Tile>
        <Tile
          color="Blue"
          title="Be Constructive"
        >
          <Quote author="Winston Churchill">
              To build may have to be the slow and laborious task of years. To destroy can be the thoughtless act of a single day.
          </Quote>
          <Explanation>
            There's a double meaning for constructive here. In a literal sense, I want to create things. Building something and seeing the result is rewarding to me. "Things" is a very vague term and I use it consciously because I'm including things like computer programs, creative writing, phyiscal objects, and even my self.
            But I also think of being constructive in terms of communicating. I think how an idea is conveyed is very important. It is very easy to criticize or fail to understand something. I think it's important to not be dismissive, to listen, to help, to lead others.
          </Explanation>
        </Tile>
        <Tile
          color="Redd"
          title="No Ego"
        >
          <Quote author="Marcus Aurelius">
              Remember that you are more free if you change your opinion and follow those who have corrected your mistakes than if you are stubborn aabout your mistakes.
          </Quote>
          <Explanation>
            I think it's hard to grow if you're attached to who you are or what you've done. And I very much want to grow. I don't need credit for things. The importance in looking for errors is not to criticize, but to improve. I, as a person, don't want to succeed, but I want what I create to succeed. I want what I create to have merit. To do that, I have to learn. To learn, I have to be open.
          </Explanation>
        </Tile>
        <Tile
          color="Green"
          title="Agility"
        >
          <Quote author="Oliver Wendell Holmes">
              It is not the place we occupy which is important, but the direction in which we move.
          </Quote>
          <Explanation>
            I've mentioned that I want to create things, but to be more specific I want to create great things and I think the way to do that is to create a lot of things. I don't think I can do that without being agile. It's also important for being willing to recognize when something isn't right and needs to be changed. I don't think it's good to be stuck on a bad road just because it was decided on long ago. I need to be agile in evaluating where I'm at and where I'm going. Strive for greatness. Doesn't mean go fast at the expense of quality, but to be agile in trying to attain greatness. So it is important to me to constantly strive to create.
          </Explanation>
        </Tile>
        <Tile
          color="Blue"
          title="Empathy"
        >
          <Quote author="Oliver Wendell Holmes">
              It is not the place we occupy which is important, but the direction in which we move.
          </Quote>
          <Explanation>
            I think one of the most valuable things I've ever learned is how to empathize with others. When I think about the greatest movies or books I've read, they've always centered around characters that I can see the world through. Being able to understand others at that level is important to making decisions that will affect others. I want to care. Technology has an impact on others. Let's keep it positive, ummk?
          </Explanation>
        </Tile>
      </div>
    );
  }
}

export default App;
