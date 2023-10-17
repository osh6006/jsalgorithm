const n = 6;
const vertex = [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
];

const graph = Array.from({ length: n + 1 }, () => []);
const visited = Array.from({ length: n + 1 }, () => false);
const distance = Array.from({ length: n + 1 }, () => 1);

// 양 방향 그래프로 작성
for (const [src, dest] of vertex) {
  graph[src].push(dest);
  graph[dest].push(src);
}

function dfs(graph, start, visited) {
  const stack = [];
  stack.push(start);
  visited[start] = true;

  while (stack.length) {
    const v = stack.pop();
    console.log(v);
    if (!visited[v]) {
      visited[v] = true;
    }
    for (const node of graph[v]) {
      if (!visited[node]) {
        visited[node] = true;
        stack.push(node);
      }
    }
  }
}

function bfs(graph, start, visited) {
  const queue = [];
  queue.push(start);
  visited[start] = true;

  while (queue.length) {
    const v = queue.shift();
    console.log(v);

    for (const node of graph[v]) {
      if (!visited[node]) {
        queue.push(node);
        visited[node] = true;
      }
    }
  }
}
dfs(graph, 1, [...visited]);
console.log();
console.log();
bfs(graph, 1, [...visited]);
