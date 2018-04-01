import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import BoardSquare from './BoardSquare';
import Knight from './Knight';
import { canMoveKnight, moveKnight } from './Game';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


class Board extends Component {
    handleSquareClick(toX, toY) {
        canMoveKnight(toX, toY) && moveKnight(toX, toY);
    }
      
    renderSquare(i) {
        const x = i % 8;
        const y = Math.floor(i / 8);
        return (
          <div key={i}
               style={{ width: '12.5%', height: '12.5%' }}>
            <BoardSquare x={x}
                         y={y}>
              {this.renderPiece(x, y)}
            </BoardSquare>
          </div>
        );
    //   const x = i % 8;
    //   const y = Math.floor(i / 8);
    //   const black = (x + y) % 2 === 1;
  
    //   const [knightX, knightY] = this.props.knightPosition;
    //   const piece = (x === knightX && y === knightY) ?
    //     <Knight /> :
    //     null;
  
    //   return (
    //         <div key={i}
    //             onClick={() => this.handleSquareClick(x, y)}
    //             style={{ width: '12.5%', height: '12.5%' }}>
    //         <Square black={black}>
    //             {piece}
    //         </Square>
    //         </div>
    //   );
    }

    renderPiece(x, y) {
        const [knightX, knightY] = this.props.knightPosition;
        if (x === knightX && y === knightY) {
          return <Knight />;
        }
    }
  
    render() {
      const squares = [];
      for (let i = 0; i < 64; i++) {
        squares.push(this.renderSquare(i));
      }
  
      return (
        <div style={{width: 400, height: 400}}>

            <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexWrap: 'wrap'
            }}>
            {squares}
            </div>
        </div>

      );
    }
  }
  
  Board.propTypes = {
    knightPosition: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired
  };

  export default DragDropContext(HTML5Backend)(Board);
