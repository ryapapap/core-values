import React, { Component } from 'react';
import './App.css';

// quote="Do not be embarrassed by your mistakes. Nothing can teach us better than our understanding of them. This is one of the best ways of self-education"
// author="Thomas Carlyle"

class Tile extends Component {
  propTypes = {
    color: React.PropTypes.string,
    title: React.PropTypes.string,
    quote: React.PropTypes.string,
    author: React.PropTypes.string,
    explanation: React.PropTypes.string
  }
  state = {
    isQuote: true
  }

  render() {
    return (<div 
      className={`Tile ${this.props.color}`} 
      onClick={() => {this.setState({ isQuote: !this.state.isQuote})}}
    >
      <div className="Tile-Content">
        <div className="Tile-Title">
          {this.props.title}
        </div>
        {this.state.isQuote ? 
          <div>
            <div className="quote">
              {this.props.quote}
            </div>
            <div className="author">
            — {this.props.author}
            </div>
          </div>
        :
          <div className="explanation">
            {this.props.explanation}
          </div>
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
        <div className="Tile Purple">
          <div className="Tile-Content">
            <div className="Tile-Title">
              Core Values
            </div>
            <div className="definition">
              <div className="defined">core</div> — the central or most important part of something.
            </div>
            <div className="definition">
              <div className="defined">value</div> — a person's principles or standards of behavior.
            </div>
          </div>
        </div>
        <Tile 
          color="Red"
          title="Empower others"
          quote="Look at all your knowledge as a gift, as a means of helping other people."
          author="John Ruskin"
          explanation="Technology has changed a lot of aspects of modern life. I don't think all of these changes have been good, but I think the best changes have been centered around helping people do new things (or old things easier). These are what I'm thinking about when I say empowering others. I think technology is best when it's aware that people that will be using it. A big part of why I wanted to work in tech is because it lets me create things that help others. I want to be empowering others. ????????????"
        />
        <Tile 
          color="Blue"
          title="Be Constructive"
          quote="To build may have to be the slow and laborious task of years. To destroy can be the thoughtless act of a single day."
          author="Winston Churchill"
          explanation="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        />
        <Tile 
          color="Redd"
          title="No Ego"
          quote="Remember that you are more free if you change your opinion and follow those who have corrected your mistakes than if you are stubborn aabout your mistakes."
          author="Marcus Aurelius"
          explanation="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        />
        <Tile 
          color="Green"
          title="Agility"
          quote="It is not the place we occupy which is important, but the direction in which we move."
          author="Oliver Wendell Holmes"
          explanation="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        />
      </div>
    );
  }
}

export default App;
