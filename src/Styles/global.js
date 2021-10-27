import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background-color: #ff1053;
        display: flex;
        justify-content: center;
        text-align:center;
        color: #ffffff;
    }

    .App {
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    input, button, h1, h2, p, label {
        padding: 5px;
        border-radius: 10px;
    }

    input, .card {
        margin-bottom: 10px;
    }

    input {
        background-color: #c1cad6;
        border: 2px solid #6c6ea0;
        color: #ff1053;
        ::placeholder {
            color: #6c6ea0;
        }
    }

    button {
        background-color: #6c6ea0;
        border: 2px solid #66c7f4;
        color: #66c7f4;
        cursor: pointer;
    }

    .form, .card {
        background-color: #c1cad6;
        padding: 30px;
        border-top-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    .input {
        display: flex;
        justify-content: space-between;
    }
`