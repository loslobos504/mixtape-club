import React from 'react';

import PlaylistImageSelector from './PlaylistImageSelector.jsx';
import Search from './Search.jsx';
import SearchList from './SearchList.jsx';
import PlaylistBuilderList from './PlaylistBuilderList.jsx';
import SearchPlayer from './SearchPlayer.jsx';

/** CreateMixtapes component renders all components associated with creation of a mixtape, including
 * PlaylistImageSelector, Search, SearchPlayer, SearchList, and SearchBuilderList at the 
 * create-mixtapes route and is a child component of Container.
 */

const CreateMixtapes = (props) => {

<<<<<<< HEAD
    const { authenticateUser, searchResults, onSearch, onChange, onGenerate, onPlayVideo, onPauseVideo, onUserRecordingEnded, recording, onBackward, onForward, onStopBackward, onStopForward, onStopRecordVideo, onRecordVideo, onReady, onResultClick, playing, selectedResult, tapeImages, builderImage, selectImage, tapeLabel, onLabelChange, onPassToSideA, sideA, onPassToSideB, sideB, displayImageSelector, onSaveImage, onSavePlaylist, onMakePublic, tapeBackgroundColor, onDelete, isPublic, queryParam, opts, recordUser, startRecordUser, stopRecordUser, onKick, onSnare } = props;
=======
    const { authenticateUser, searchResults, onSearch, onChange, onGenerate, onPlayVideo, onPauseVideo, recording, onBackward, onForward, onStopBackward, onStopForward, onStopRecordVideo, onRecordVideo, onReady, onResultClick, playing, selectedResult, tapeImages, builderImage, selectImage, tapeLabel, onLabelChange, onPassToSideA, sideA, onPassToSideB, sideB, displayImageSelector, onSaveImage, onSavePlaylist, onMakePublic, tapeBackgroundColor, onDelete, isPublic, queryParam, opts, recordUser, startRecordUser, stopRecordUser, onKick, onSnare, onHat } = props;
>>>>>>> creating hihat
  
    return (
        <div style={{marginTop: '4rem'}}>
            {
                displayImageSelector ? 
                    <PlaylistImageSelector tapeImages={tapeImages} selectImage={selectImage} tapeLabel={tapeLabel} onLabelChange={onLabelChange} onSaveImage={onSaveImage} builderImage={builderImage} tapeBackgroundColor={tapeBackgroundColor}/> 
                :
                    <div className="mx-auto" style={{maxWidth: '860px'}}>
                        <Search onSearch={onSearch} onChange={onChange} />
<<<<<<< HEAD
                        <SearchPlayer opts={opts} onPlayVideo={onPlayVideo} onReady={onReady} onPauseVideo={onPauseVideo} onUserRecordingEnded={onUserRecordingEnded} onBackward={onBackward} onForward={onForward} onStopBackward={onStopBackward} onStopForward={onStopForward} playing={playing} recording={recording} onStopRecordVideo={onStopRecordVideo} onRecordVideo={onRecordVideo} searchResults={searchResults} selectedResult={selectedResult} onPassToSideA={onPassToSideA} onPassToSideB={onPassToSideB} startRecordUser={startRecordUser} stopRecordUser={stopRecordUser} recordUser={recordUser} onKick={onKick} onSnare={onSnare} />
=======
                        <SearchPlayer opts={opts} onPlayVideo={onPlayVideo} onReady={onReady} onPauseVideo={onPauseVideo} onBackward={onBackward} onForward={onForward} onStopBackward={onStopBackward} onStopForward={onStopForward} playing={playing} recording={recording} onStopRecordVideo={onStopRecordVideo} onRecordVideo={onRecordVideo} searchResults={searchResults} selectedResult={selectedResult} onPassToSideA={onPassToSideA} onPassToSideB={onPassToSideB} startRecordUser={startRecordUser} stopRecordUser={stopRecordUser} recordUser={recordUser} onKick={onKick} onSnare={onSnare} onHat={onHat}/>
>>>>>>> creating hihat
                        <SearchList searchResults={searchResults} onResultClick={onResultClick}/>
                        <PlaylistBuilderList builderImage={builderImage} tapeLabel={tapeLabel} sideA={sideA} sideB={sideB} onSaveImage={onSaveImage} onSavePlaylist={onSavePlaylist} onMakePublic={onMakePublic} onDelete={onDelete} queryParam={queryParam} isPublic={isPublic} />
                    </div>
            }
        </div>
    )
}

// <SearchList searchResults={searchResults} onPlayVideo={onPlayVideo} onReady={onReady} />

export default CreateMixtapes;