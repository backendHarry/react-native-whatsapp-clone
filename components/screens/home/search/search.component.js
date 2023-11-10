import { View, TextInput } from "react-native";
import { FilterMessages, SearchIcon } from "../../../../assets/icons/index";
import { COLORS, CONSTANTS } from "../../../../theme/index";

import styles from "./search.style";

const Search = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchFormGroup}>
        <View style={styles.searchIcon}>
          <SearchIcon
            stroke={COLORS.grayIcon}
            height={CONSTANTS.iconHeight}
            width={CONSTANTS.iconWidth}
          />
        </View>
        <TextInput
          style={styles.searchFieldInput}
          placeholderTextColor={COLORS.searchGrayPlaceholder}
          placeholder="Search"
        />
      </View>
      <FilterMessages
        stroke={COLORS.bluePrimary}
        height={CONSTANTS.iconHeight}
        width={CONSTANTS.iconWidth}
      />
    </View>
  );
};

export default Search;
