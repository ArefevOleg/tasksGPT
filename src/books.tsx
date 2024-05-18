




export const Books = () => {
  return (
    <div>
    
    </div>
  );
};


// 1. ok
// Вопрос:    Что нужно написать вместо ххх, что бы код работал?
// type UserPropsType = {
//     name: string
//     description: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//     return <div>
//         <h1>Имя: {props.name}</h1>
//         <div>Описание: {props.description}</div>
//     </div>
// }

// 2. ok
// Что нужно написать вместо ххх, что бы код работал?
// import ReactDOM from 'react-dom'
// //
// export const YoutubeVideoBlock = () => {
//     return <div>
//         <VideoHeader />
//         <VideoContent />
//         <VideoStatistics />
//     </div>
// }
// export const VideoHeader = () => {
//     return <div>
//         😀 Заголовок видео
//     </div>
// }
// export const VideoContent = () => {
//     return <div>
//         📼 Контент видео
//     </div>
// }
// export const VideoStatistics = () => {
//     return <div>
//         📊 Статистика лайков
//     </div>
// }

// ReactDOM.render(<div>App</div>,
//     document.getElementById('root')
// );

//Что нужно написать вместо ххх, чтобы на экране увидеть:
//😀 Заголовок видео
//📼 Контент видео
//📊 Статистика лайков
// ❗ Ответ дать минимально возможным объёмом кода



// 3. 
// Вопрос:
// Что нужно написать вместо xxx yyy zzz, чтобы увидеть ожидаемый результат?
//
// // Ответ дайте через пробел, пример: a={12} ccc={video.id} d={'hello'}
// import ReactDOM from 'react-dom'

// export const VideoHeader = (props: {videoName: string}) => {
//     return <div>
//         😀 {props.videoName}
//     </div>
// }
// export const VideoContent = (props: {videoContent: string}) => {
//     return <div>
//         📼 <a href={props.videoContent}>{props.videoContent}</a>
//     </div>
// }
// export const VideoDescription = (props: {videoDescription: string}) => {
//     return <div>
//         📑 {props.videoDescription}
//     </div>
// }

// export const YoutubeVideo = (props: any) => {
//     return <div>
//         <VideoHeader xxx />
//         <VideoContent yyy />
//         <VideoDescription zzz />
//     </div>
// }

// export const App = () => {
//     const video = {
//         title: 'Samurai way',
//         link: 'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8',
//         description: 'Best free react-course'
//     }

//     return <YoutubeVideo video={video} />
// }

// ReactDOM.render(<App />,
//     document.getElementById('root')
// );

//4 Вопрос:
//
// Что нужно написать вместо xxx и yyy? Ответ дайте через пробел, например:
// blabla onClick(props)
//type PagePropsType = {
//     age: number
//     name: string
//     avatarUrl: string
// }
// const Page: React.FC<PagePropsType> = (props) => {
//     return <User a={xxx} n={yyy} />
// }
// type UserPropsType = {
//     a: number
//     n: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//     return <div>name: {props.n}, age: {props.a}</div>
// }
//
// // Что нужно написать вместо xxx и yyy?
// // Ответ дайте через пробел, например: blabla onClick(props)

//5 Вопрос:
//
// Каков результат выполнения этого выражения?
//{ } === { }
//
// /*Каков результат выполнения этого выражения?*/
//6 Вопрос:
//
// Что нужно написать вместо xxx и yyy, чтобы компонент UserMoney отобразил информацию о двух кошельках (bitcoin и $)?
//
// Ответ дайте через пробел, например: props.x wallets
//type UserWalletType = {
//     title: string
//     amount: number
// }
// type UserWalletPropsType = {
//     wallet: UserWalletType
// }
//
// export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
//     return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
// }
//
// export const UserMoney = () => {
//     const wallets = [
//         {title: 'bitcoin', amount: 1},
//         {title: '$', amount: 100}
//     ]
//
//     return <div>
//         <UserWallet wallet={xxx} />
//         <UserWallet wallet={yyy} />
//     </div>
// }

//7 Вопрос:
//
// Что нужно написать вместо XXX и YYY? Ответ дайте через пробел, например:
// car user
// type NewsType = {
//     title: string
//     author: string
// }
// type ArticleType = {
//     title: string
//     date: string
//     text: string
// }
// type PagePropsType = {
//     news: NewsType[]
//     mainArticle: ArticleType
// }
// export const Page: React.FC<PagePropsType> = (props) => {
//     return <div>
//         <article>
//             <h1>Название: {props.XXX.title}</h1>
//             <div>{props.XXX.date}</div>
//             <div>{props.XXX.text}</div>
//         </article>
//         <aside>Articles:
//             <ul>
//                 {props.YYY.map(n => <li>{n.title}, {n.author}</li>)}
//             </ul>
//         </aside>
//     </div>
// }
//8 Вопрос:
//
// Что МИНИМАЛЬНО ДОСТАТОЧНО нужно дописать в строке 8 (cтрока с ошибкой), чтобы не было ошибки
//type PropsType = {
//     city: string        // 'minsk'
//     country: string     // 'belarus'
//     coords?: string     // '53.917501,27.604851'
// }
//
// export const Wrapper1 = () => {
//     return <PropsComponent1 city='minsk'/>
// }
//
// export const PropsComponent1: React.FC<PropsType> = (props) => {
//     return <div>hello</div>
// }
//
// // Что МИНИМАЛЬНО ДОСТАТОЧНО нужно дописать в строке 8 (cтрока с ошибкой), чтобы не было ошибки
