function NavBar(){
    return (<>
        <nav>
          <div className="nav-wrapper">
            <a href="/" ><h3 className='title-word'>All About Cinema</h3></a>
            <ul>
              <li className='nav-item'><a href="/trending" className='trending-movies'><img id="image-trending" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACW0lEQVR4nNWXv2sUQRTH14giErW1EBEstLExNgZx9vvdVS8Ykgi5xsTCxiYEkUt/hX+ASgoLAxZGsBQsxAiKpQgWOWwV/IH3Zu6SeLf4A4kje3cJuXjn7d7uRXzwminm83lv387OOs7/Hku+v894nvtP4Daf7xPgmSatkONbLmDIXAhvCLzoCUS77nkBPgr5QZND6/DBwT0CrKwJhFn0/WOpC0gdXK8SeL8uBlzbCK8lcHvLBIR8tVlAgB8CHE5VQJNDoUQIF8/L1OBK9Qv5848O1GfhvtPrKHreyVbwRhdWNXk8NVgpk9lrSFjH2ba2Jq57rp1AYxaepiYgwJ3Gxg/fKbWrtkaO/1UgfCPIM2kJvNzQ3vlwTZNXOwkI8Do8qJILkMtNm7uu0sDdTgJhGuBiIrhR6miLyh5p8msUAU0WNs5ON9VfjwhqPwue53cFt/l8nwbeJhXo+lzQ5FBSeOORrdhsdmdsAQHm0xCoSfj+qfgdQPT2m9FRW56ZsWZysl0XpmPBbTa7XchfUeCl6WkbiNggCGxQrdrlublWJ+NsLAFRqj9q9ZVCoQ5fy2rVmomJzQL3YndAA9+jCATGNAsEgS3ncsnfBAHeRBH4srDQLFAsWj0ysnkGbsQXIG9FGsCxsbqE1rayuGhLU1OthvByqt98He8cWC0pdcDpJjT5JAWBB063YYAjQlYSwMuflTrkJIkieaHd/a9DGg2cdtL6N9BkNUblz5d8/6CTZohS+wW4Gba1DfibBh4LcNbpZdiBgR1GqRMCXDLAlfDWE96SPg0P7+4puFfxG8SYFo/oR7bBAAAAAElFTkSuQmCC" alt="external-trending-basic-user-interface-anggara-flat-anggara-putra" />What's Hot?</a></li>
            </ul>
          </div>
        </nav>
    </>);
}

export default NavBar;