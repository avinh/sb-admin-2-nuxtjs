export default function ({ store, redirect }: any) {
    if (store.state.auth.loggedIn) {
        return redirect('/')
    }
}