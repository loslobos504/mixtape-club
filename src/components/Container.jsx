import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";

import Landing from "./Landing.jsx";
import Login from "./Login.jsx";
import CreateMixtapes from "./CreateMixtapes.jsx";
import MixtapePlayer from "./MixtapePlayer.jsx";

/** Container component handles the front-end routing/rendering of the app and renders the Login,
 * CreateMixtapes, and MixtapePlayer components at their respective routes. Container is a child 
 * component of App.
 */

function Container(props) {

    const { opts, isAuthenticated, authenticateUser, location, searchResults, onChange, onSearch, onGenerate, onPlayVideo, onReady, onUserRecordingEnded, onPauseVideo,onStopRecordVideo, onRecordVideo, onBackward, onForward, onStopBackward, onStopForward, onResultClick, playing, recording, selectedResult, tapeImages, builderImage, selectImage, tapeLabel, onLabelChange, onPassToSideA, sideA, onPassToSideB, sideB, displayImageSelector, onSaveImage, onDeckSideA, onDeckSideB, onSavePlaylist, onMakePublic, tapeBackgroundColor, onDelete, isPublic, queryParam, googleId, startRecordUser, stopRecordUser, recordUser, onKick, onSnare, onHat } = props;
   
    return (
            <section className="route-section">
                <Switch location={location}>
                console.log(location);
                    <Route exact path="/" component={Login} />
                    
                    <Route path='/create-mixtapes'
                    render={(props) => isAuthenticated ? (<CreateMixtapes {...props} opts={opts} searchResults={searchResults} authenticateUser={authenticateUser} onReady={onReady} onSearch={onSearch} onChange={onChange} onGenerate={onGenerate} onPauseVideo={onPauseVideo} onPlayVideo={onPlayVideo} onResultClick={onResultClick} playing={playing} recording={recording} onUserRecordingEnded={onUserRecordingEnded} onStopRecordVideo={onStopRecordVideo} onRecordVideo={onRecordVideo} onForward={onForward} onBackward={onBackward} onStopBackward={onStopBackward} onStopForward={onStopForward} selectedResult={selectedResult} tapeImages={tapeImages} builderImage={builderImage} selectImage={selectImage} tapeLabel={tapeLabel} onLabelChange={onLabelChange} onPassToSideA={onPassToSideA} sideA={sideA} onPassToSideB={onPassToSideB} sideB={sideB} displayImageSelector={displayImageSelector} onSaveImage={onSaveImage} onSavePlaylist={onSavePlaylist} onMakePublic={onMakePublic} tapeBackgroundColor={tapeBackgroundColor} onDelete={onDelete} isPublic={isPublic} startRecordUser={startRecordUser} stopRecordUser={stopRecordUser} recordUser={recordUser} onKick={onKick} onSnare={onSnare} onHat={onHat}/>) : (<Login {...props} />) } />

                    <Route path='/mixtape-player'
                    render={(props) => <MixtapePlayer {...props} isPublic={false} onDeckSideA={onDeckSideA} onDeckSideB={onDeckSideB} queryParam={queryParam} googleId={googleId}/>} />

                    <Route path='/mixtape-player/:id' component={MixtapePlayer}
                    render={(props) => <MixtapePlayer {...props} isPublic={false} onDeckSideA={onDeckSideA} onDeckSideB={onDeckSideB} queryParam={queryParam}/>} />

                    <Route path='/login'
                    render={(props) => <Login {...props} />} />

                    <Route path='/publicTEST'
                    component={(props) => <MixtapePlayer {...props} isPublic={true} onDeckSideA={onDeckSideA} onDeckSideB={onDeckSideB} queryParam={queryParam} googleId={googleId}/>} />
                </Switch>
            </section>
    );
}

// <Route path="/create-mixtapes" component={CreateMixtapes} searchResults={searchResults} />

export default withRouter(Container);