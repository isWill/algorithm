/*
  2018-9-19 每日一题

  编写一个函数来查找字符串数组中的最长公共前缀。

  如果不存在公共前缀，返回空字符串 “”。

  示例 1:

  输入: [“flower”,”flow”,”flight”]
  输出: “fl”
  示例 2:

  输入: [“dog”,”racecar”,”car”]
  输出: “”
  解释: 输入不存在公共前缀。
  说明:

  所有输入只包含小写字母 a-z 。
*/

function longestCommonPrefix(strs) {
  if(typeof strs == 'undefined' || strs == null || strs.length == 0) {
    return '';
  }

  var prefix = strs[0];

  for(var i = 0; i < strs.length; i++) {
    var len = prefix.length > strs[i].length ? strs[i].length : prefix.length;
    var n;

    for(n = 0;n < len; n++) {
      if(prefix.charAt(n) != strs[i].charAt(n)) {
        break;
      }
    }

    prefix = prefix.substring(0, n);
  }

  return prefix;
}

/*
  2018-9-20 每日一题

  给定两个单词（beginWord 和 endWord）和一个字典 wordList，找出所有从 beginWord 到 endWord 的最短转换序列。转换需遵循如下规则：

  每次转换只能改变一个字母。
  转换过程中的中间单词必须是字典中的单词。
  说明:

  如果不存在这样的转换序列，返回一个空列表。
  所有单词具有相同的长度。
  所有单词只由小写字母组成。
  字典中不存在重复的单词。
  你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
  示例 1:

  输入:
  beginWord = “hit”,
  endWord = “cog”,
  wordList = [“hot”,”dot”,”dog”,”lot”,”log”,”cog”]

  输出:
  [
    [“hit”,”hot”,”dot”,”dog”,”cog”],
    [“hit”,”hot”,”lot”,”log”,”cog”]
  ]
  示例 2:

  输入:
  beginWord = “hit”
  endWord = “cog”
  wordList = [“hot”,”dot”,”dog”,”lot”,”log”]

  输出: []

  解释: endWord “cog” 不在字典中，所以不存在符合要求的转换序列。
  给定两个单词（beginWord 和 endWord）和一个字典 wordList，找出所有从 beginWord 到 endWord 的最短转换序列。转换需遵循如下规则：

  每次转换只能改变一个字母。
  转换过程中的中间单词必须是字典中的单词。
  说明:

  如果不存在这样的转换序列，返回一个空列表。
  所有单词具有相同的长度。
  所有单词只由小写字母组成。
  字典中不存在重复的单词。
  你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
  示例 1:

  输入:beginWord = "hit",
  endWord = "cog",
  wordList = ["hot","dot","dog","lot","log","cog"]

  输出:
  [
    ["hit","hot","dot","dog","cog"],
    ["hit","hot","lot","log","cog"]
  ]
  示例 2:

  输入:
  beginWord = "hit"
  endWord = "cog"
  wordList = ["hot","dot","dog","lot","log"]

  输出: []

  解释: endWord "cog" 不在字典中，所以不存在符合要求的转换序列。
*/

function ladderLength(beginWord, endWord, wordList) {
  var wordList = wordList;
  var visited  = [];
  var paths    = [];
  var dist     = 1;

  visited.push(beginWord);
  paths.push(beginWord);

  while(!visited.includes(endWord)) {
    var temp = [];

    visited.forEach(function(val) {
      for(var i = 0; i < val.length; i++) {
        var chars = val.split('');

        for(var j = 'a'.charCodeAt(); j < 'z'.charCodeAt() + 1; j++) {
          chars[i] = String.fromCharCode(j);
          var newWord = chars.join('');

          if(wordList.includes(newWord)) {
            temp.push(newWord);
            wordList.splice(wordList.indexOf(newWord), 1);
          }
        }
      }
    });

    dist++

    if(temp.length == 0) {
      return 0;
    }

    visited = temp;
  }

  return dist;
}
