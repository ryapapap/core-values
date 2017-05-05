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
  render() {
    return (<div 
      className={`Tile ${this.props.color}`} 
    >
      <div className="Tile-Content">
          <div className="Tile-Title">
            {this.props.title}
          </div>
          {this.props.children}
      </div>
    </div>)
  }
}

/*
CSS flip these cards?
Need more responsive stuff
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
            <p>
            Often I'll ask myself what I should be doing, or what I want to be doing, or why I'm doing something. And these are tough questions. I don't think I can answer them authoritatively (and I don't think I'd want to). But I do want something I can consider when I'm trying to answer these questions. The following are a list of values that I've reflected on and consider important to me and the type of work I want to be doing.
            </p>
            <p>
            This isn't meant to be a complete list of everything that I find valuable, it's just what I came up with when I was thinking about it. Maybe if you ask me now (at the time you're reading this), my answer would be different, but for this moment (the one where I'm writing this), these are some ideas that I resonate with very strongly.
            </p>
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
            I think the coolest things about technology is the way that it’s helped people do things more easily. I’m constantly in awe of all the novel experiences technology has created and the way it’s made a seemingly infinite amount of knowledge easier to access. I aspire to use what I know to create things that help people either learn or do things.
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
            <p>
            I mean constructive to have a double meaning. In one sense, I very much want to be creating things. I have a strong internal drive to create and I take a lot of pride in looking back at things that I’ve created. I think this motivation applies to a lot of things, from computer programs and words to physical objects and my self.
            </p>
            <p>
            I also mean constructive in terms of communicating. I think how an idea is conveyed is very important. I don’t want to be fast criticize. I want to try hard to listen and understand where people are coming from and offer ideas in a way that helps things improve.
            </p>
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
            I think it’s hard for things to improve if they’re too connected to some past idea. I want to have a mindset for growth and I understand that doing that means that I have to let my ego go. I’ve never felt very attached to titles or taking credit for things. I care very much that what I’m doing is good and doing that means taking the best ideas, not my own ideas.
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
            I've mentioned that I want to create things, but to be more specific I want to create great things and I think the way to do that is to create a lot of things. I don't think I can do that without being agile. I also don’t think of this as a tradeoff with quality, but a tool that can be used to attain it by constantly focusing on what will improve quality the most.
          </Explanation>
        </Tile>
        <Tile
          color="Blue"
          title="Empathy"
        >
          <Quote author="Indian wisdom">
              Do not be proud, no matter what position you occupy in life. In you and in me and in every other person lives the same God, the same life force; you look down on me in vain; we are all equal beings.
          </Quote>
          <Explanation>
            I care about other people. It matters to me how they feel. I want to consider that consequences of what I make and how it will impact others. I’m striving to be generous in giving back and trying to understand other people. Technology can be used for good and bad, let’s make it good.
          </Explanation>
        </Tile>
      </div>
    );
  }
}

export default App;
