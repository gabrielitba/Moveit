import styled from 'styled-components';

export const Container = styled.div`
  > div {
    list-style: none;

    margin: 0 0 1.7rem 2.2rem;

    .tg-list-item {
      margin: 0 2em;
    }

    .tgl {
      display: none;

      // add default box-sizing for this scope
      &,
      &:after,
      &:before,
      & *,
      & *:after,
      & *:before,
      & + .tgl-btn {
        box-sizing: border-box;
        &::selection {
          background: none;
        }
      }

      + .tgl-btn {
        outline: 0;
        display: block;
        width: 4em;
        height: 2em;
        position: relative;
        cursor: pointer;
        user-select: none;
        &:after,
        &:before {
          position: relative;
          display: block;
          content: '';
          width: 50%;
          height: 100%;
        }

        &:after {
          left: 0;
        }

        &:before {
          display: none;
        }
      }

      &:checked + .tgl-btn:after {
        left: 50%;
      }
    }

    .tgl-flip {
      + .tgl-btn {
        padding: 2px;
        transition: all 0.2s ease;
        font-family: sans-serif;
        perspective: 100px;
        &:after,
        &:before {
          display: inline-block;
          transition: all 0.4s ease;
          width: 100%;
          text-align: center;
          position: absolute;
          line-height: 2em;
          font-weight: bold;
          color: #fff;
          position: absolute;
          top: 0;
          left: 0;
          backface-visibility: hidden;
          border-radius: 4px;
        }

        &:after {
          content: attr(data-tg);
          background: ${(props) => props.theme.colors.after};
          transform: rotateY(-180deg);
        }

        &:before {
          background: ${(props) => props.theme.colors.before};
          content: attr(data-tg);
        }

        &:active:before {
          transform: rotateY(-20deg);
        }
      }

      &:checked + .tgl-btn {
        &:before {
          transform: rotateY(180deg);
        }

        &:after {
          transform: rotateY(0);
          left: 0;
          background: ${(props) => props.theme.colors.before};
        }

        &:active:after {
          transform: rotateY(20deg);
        }
      }
    }
  }
`;
