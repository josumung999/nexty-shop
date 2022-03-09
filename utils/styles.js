const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles({
  navBar: {
    backgroundColor: '#203040',
    '& a': {
      color: "#fff",
      marginLeft: 10,
    }
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem'
  },
  grow: {
    flexGrow: 1,
  },
  menuIcon: {
    height: 24,
    width: 24,
    color: '#ffffff',
    marginRight: 6
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    textAlign: 'center',
    padding: '4rem',
  },
  form: {
    maxWidth: 800,
    margin: '0 auto'
  }
});

export default useStyles;