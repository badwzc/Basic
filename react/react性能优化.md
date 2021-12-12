# 优化方法
    1. 减少render次数，减少diff（reconcilition）时间
    2. 减少计算的量：减少重复计算

### 减少re-render
    PureComponent
    shouldComponentUpdate
    render-props
    React.memo
    无状态组件

### React.memo vs PureComponent vs Component
    React.memo 是一个高阶组件，对组件的props做了浅比较，发生变化了再重新渲染，只适用于函数式组件，可以自定义优化方法
    PureComponent 自带了一个shouldComponentUpdate，对state和props做了浅比较

    forceUpdate 强制跳过shouldcomponentUpdate


### 减少计算的量
    useCallback: 方法缓存，减少子组件重新渲染
    useMemo：缓存值，减少耗时计算


### 代码复用
    高件组件——HOC
    自定义hooks

### useCallback
    作用：优化子组件，减少子组件的重复渲染
    需要和React.memo 一起使用才能达到优化效果，减少渲染
    否则每次都会对inputs进行比较，并且需要对历史函数做缓存，开销会更大

### useMemo
    1) 缓存值，减少子组件渲染
    2) 缓存需要耗时的计算的值，优化当前组件渲染




