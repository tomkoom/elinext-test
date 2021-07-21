### Link
[elinext-test.netlify.app](https://elinext-test.netlify.app/)

### Objective
A customer needs a web app to search for images using Flickr. They also want to store some images in the Bookmarks section. See the mockup provided.

### Details
- [x] The app should provide an interface to do a simple search on Flickr. 
- [x] The search results area should provide a list of images with titles; also, there should be a possibility to store any image with arbitrary tags provided by the end user. 
- [ ] Please note that search results may be huge, we will need a pagination.
- [x] The Bookmarks area should list all the saved images with ability to remove any single item.
- [x] There is no limitation in frameworks except that the app should be built with the latest React.
- [x] Bookmarks are saved to the browser local storage.

### Nice to Have Things

There are few more things that will increase the possibility of being hired.
- [x] The UI may be implemented with using a UI framework, for example: Material UI, Bootstrap,
whatever.
- [x] Code style is important.
- [ ] More tests – more respect.
- [ ] Use TypeScript
- [x] The code should be placed to any source control system.
- [x] Also, it would be nice to deploy the app to any public service to view it in action.
- [ ] Bookmarks may be saved to one of public bookmarks services. The Profile window may be
used for an authentication.
- [ ] The app may monitor user’s activity; if there is no user activity (mouse movements), let’s
say, in one minute, the app should end user session (if some 3 rd party bookmarks service is
used) and should display a mask over the user interface.
- [ ] If we go with this activity monitoring, let’s handle few app tabs properly. If a user has
opened two or more app tabs in the same browser window the app should monitor his
activity in the active tab (if any) and should not lock other inactive tabs.