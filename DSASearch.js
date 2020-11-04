const BinarySearchTree = require('./BinarySearchTree');

// 1. How many searches?
//    1.1  [3, 5, 6, 8, 11, 12, 14, 15, 17, 18] - searching for 8
//          4 searches

//    1.2 [3, 5, 6, 8, 11, 12, 14, 15, 17, 18] - search for 16
//          3 searches

// 2. Adding a React UI
//     see App.js or type 'npm start' in terminal

//3. Find a book
const books = [
  { dewey: 100, title: 'test title1' },
  { dewey: 155, title: 'test title2' },
  { dewey: 255, title: 'test title3' },
  { dewey: 275.4, title: 'test title4' },
  { dewey: 299, title: 'test title5' },
  { dewey: 412, title: 'test title6' },
  { dewey: 420, title: 'test title7' },
  { dewey: 700, title: 'test title8' },
  { dewey: 1000, title: 'test title9' },
  { dewey: 1111, title: 'test title10' },
];

function findBook(library, dewey, title) {
  let start = 0;
  let end = library.length;

  while (start < end) {
    let index = Math.floor((start + end) / 2);

    if (library[index].dewey === dewey) {
      if (library[index].title === title) {
        return library[index];
      }
      for (let i = index + 1; library[i].dewey === dewey; ++i)
        if (library[i].title === title) return library[i];
      for (let i = index - 1; library[i].dewey === dewey; --i)
        if (library[i].title === title) return library[i];
      return null;
    }
    if (library[index].dewey < dewey) start = middle + 1;
    else end = index - 1;
  }
  return null;
}

// console.log(findBook(books, 255, 'test title3'));

function findBook2(library, dewey, title, start, end) {
  start = start === undefined ? 0 : start;
  end = end === undefined ? library.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = library[index];

  // console.log(start, end);
  if (item.dewey === dewey) {
    if (item.title === title) {
      return library[index];
    }
  } else if (item.dewey < dewey) {
    return findBook2(library, dewey, title, index + 1, end);
  } else if (item.dewey > dewey) {
    return findBook2(library, dewey, title, start, index - 1);
  }
}

// console.log(findBook2(books, 700, 'test title8'));

// 4. Searching in a BST
//    4.1  in-order -> [ 14 15 19 25 27 35 79 89 90 91 ]
//         pre-order -> [ 35 25 15 14 19 27 89 79 91 90 ]
//         post-order -> [ 14 19 15 27 25 90 79 91 89 35 ]

//    4.2  post-order -> [ 5 7 6 9 11 10 8 ]
//         pre-order -> [ 8 6 5 7 10 9 11 ]

// 5. Implement different tree traversals
const nums = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
function treeTraversal(values) {
  let BST = new BinarySearchTree();
  for (let i = 0; i < values.length; i++) {
    BST.insert(values[i], values[i]);
  }

  console.log('\n pre-order');
  BST.preOrder(BST);
  console.log('\n pre-order');
  BST.inOrder(BST);
  console.log('\n pre-order');
  BST.postOrder(BST);
}

// treeTraversal(nums);

// 6. Find the next commanding officer
people = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
function officerBST(values) {
  let BST = new BinarySearchTree();
  for (let i = 0; i < values.length; i++) {
    BST.insert(values[i], values[i]);
  }

  return BST;
}

let officersForBST = officerBST(people);

function findNextInCommand(officers) {
  const rankingOfficers = [];

  if (!officers) {
    return rankingOfficers;
  }

  const queue = [officers];
  while (queue.length) {
    const officer = [];

    for (let i = 0; i < queue.length; i++) {
      const node = queue.shift();

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }

      officer.push(node.value);
    }
    rankingOfficers.push(officer);
  }
  return rankingOfficers;
}

console.log(findNextInCommand(officersForBST));

// 7. Max Profits

function best_profit(prices) {
  if (!prices.length) return 0;

  let buy = prices[0];
  let sell = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    sell = prices[i];
    if (sell < buy) {
      buy = sell;
    }
    if (sell - buy > profit) {
      profit = sell - buy;
    }
  }
  return profit;
}

// console.log(best_profit([128, 97, 121, 123, 98, 97, 105]));