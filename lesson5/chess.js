function odd(n) {
    if (n % 2 != 0)
        return true;
    else
        return false;
}
function even(n) {
    if (n % 2 == 0 || n == 0)
        return true;
    else
        return false;
}
function chess_board() {
    let board = document.getElementById('E2');
    if (!board) {
        let i = 0, j = 0;
        board = document.getElementById('chess');
        for (i = 0; i < 10; i++) {
            let row = document.createElement("div");
            row.className = "chess_row";
            board.appendChild(row);
            for (j = 0; j < 10; j++) {
                let cell = document.createElement("div");
                if (i == 0 || i == 9) {
                    cell.className = "chess_header_row";
                    if (j != 0 && j != 9)
                        cell.innerHTML = String.fromCharCode(j + 64);
                    if (i == 0)
                        cell.className += " rotated";
                }
                else if (j == 0 || j == 9) {
                    cell.className = "chess_header_row";
                    cell.innerHTML = 9 - i;
                    if (j == 9)
                        cell.className += " rotated";
                }
                else if (odd(i) && odd(j) || even(i) && even(j))
                    cell.className = "chess_white_cell";
                else if (odd(i) && even(j) || even(i) && odd(j))
                    cell.className = "chess_black_cell";
                if (i != 0 && j != 0)
                    cell.id = String.fromCharCode(j + 64) + String(9 - i);
                row.appendChild(cell);
            }
        }
    }
}

function put_figures(str) {
    let fill_icons = false;
    if (str == 'icons')
        fill_icons = true;
    let filled_flag = false;
    let cell_id = "A1";
    let cell = document.getElementById(cell_id);
    if (cell.innerHTML != "")
        filled_flag = true;
    for (i = 1; i < 9; i++)
        for (j = 1; j < 9; j++) {
            cell_id = String.fromCharCode(i + 64) + String(j);
            cell = document.getElementById(cell_id);
            if (filled_flag)
                cell.innerHTML = "";
            else
                switch (cell_id) {
                    case "A8":
                    case "H8":
                        cell.className += " rotated";
                    case "A1":
                    case "H1":
                        if (fill_icons) {
                            let img = document.createElement("img");
                            if (j == 8)
                                img.src = "img/bR.png";
                            else
                                img.src = "img/wR.png";
                            img.className = "chess_img";
                            cell.appendChild(img);
                        }
                        else
                            cell.innerHTML = "R";
                        break;
                    case "B8":
                    case "G8":
                        cell.className += " rotated";
                    case "B1":
                    case "G1":
                        if (fill_icons) {
                            let img = document.createElement("img");
                            if (j == 8)
                                img.src = "img/bN.png";
                            else
                                img.src = "img/wN.png";
                            img.className = "chess_img";
                            cell.appendChild(img);
                        }
                        else
                            cell.innerHTML = "N";
                        break;
                    case "C8":
                    case "F8":
                        cell.className += " rotated";
                    case "C1":
                    case "F1":
                        if (fill_icons) {
                            let img = document.createElement("img");
                            if (j == 8)
                                img.src = "img/bB.png";
                            else
                                img.src = "img/wB.png";
                            img.className = "chess_img";
                            cell.appendChild(img);
                        }
                        else
                            cell.innerHTML = "B";
                        break;
                    case "D8":
                        cell.className += " rotated";
                    case "D1":
                        if (fill_icons) {
                            let img = document.createElement("img");
                            if (j == 8)
                                img.src = "img/bK.png";
                            else
                                img.src = "img/wK.png";
                            img.className = "chess_img";
                            cell.appendChild(img);
                        }
                        else
                            cell.innerHTML = "K";
                        break;
                    case "E8":
                        cell.className += " rotated";
                    case "E1":
                        if (fill_icons) {
                            let img = document.createElement("img");
                            if (j == 8)
                                img.src = "img/bQ.png";
                            else
                                img.src = "img/wQ.png";
                            img.className = "chess_img";
                            cell.appendChild(img);
                        }
                        else
                            cell.innerHTML = "Q";
                        break;
                    case "A7":
                    case "B7":
                    case "C7":
                    case "D7":
                    case "E7":
                    case "F7":
                    case "G7":
                    case "H7":
                        cell.className += " rotated";
                    case "A2":
                    case "B2":
                    case "C2":
                    case "D2":
                    case "E2":
                    case "F2":
                    case "G2":
                    case "H2":
                        if (fill_icons) {
                            let img = document.createElement("img");
                            if (j == 7)
                                img.src = "img/bP.png";
                            else
                                img.src = "img/wP.png";
                            img.className = "chess_img";
                            cell.appendChild(img);
                        }
                        else
                            cell.innerHTML = "P";
                        break;
                }
        }
}
