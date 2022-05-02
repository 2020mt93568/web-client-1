const styles = {
    homeContainer: {
        padding: "16px"
    }
};
export const Home = () => {
    return (
        <div style={styles.homeContainer}>
            <h2>
                Welcome to Todo App.
            </h2>
            <div>
                Your very own cloud based, cross platform task list and productivity app.
            </div>
        </div>
    );
};
