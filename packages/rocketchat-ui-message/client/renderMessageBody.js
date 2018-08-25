/* global renderMessageBody:true */
import s from 'underscore.string';

renderMessageBody = (message) => {
	message.html = s.trim(message.msg) ? s.escapeHTML(message.msg) : '';
	const renderedMessage = RocketChat.callbacks.run('renderMessage', message);
	const tokens = (renderedMessage.tokens && renderedMessage.tokens.reverse()) || [];
	return tokens.reduce((html, { token, text }) => html.replace(token, () => text), renderedMessage.html);
};

/* exported renderMessageBody */
