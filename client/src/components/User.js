import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActions, CardContent, Button, Typography } from "@material-ui/core";
import axios from "axios";

function User({ user, userDelete }) {

    const styles = makeStyles({
        root: {
            margin: "10px 0",
            color: "#f73f85"
        },
        button: {
            color: "#444"
        }
    })();

    return (
        <div className="User">
            <Card className={styles.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {user.name}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {user.bio}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" className={styles.button} onClick={() => userDelete(user.id)}>
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default User;
