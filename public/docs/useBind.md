*** useBind  ***

[[https://codesandbox.io/embed/blissful-water-ytss8?fontsize=14&hidenavigation=1&theme=dark]]

### 绑定一个状态变更到 ref，保持 ref 为最新值


``` typescript
const [state, setState] = useState('')
const stateBound = useBind(state)
```