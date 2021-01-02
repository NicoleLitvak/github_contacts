import React from 'react'

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

const Contacts = ({ contacts}) => {
    return (
        <div >
            {contacts.map((contact) => (
                <div key={contact.id} className="root root1">
                    <Card className="">
                        <CardHeader className="media"
                            avatar={
                                <Avatar aria-label="recipe" className="avatar" src={contact.avatar_url}>
                                </Avatar>
                            }
                            title={contact.login}
                            subheader={contact.id}
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p" className="descriptionCard">
                                {contact.html_url}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    )
};

export default Contacts