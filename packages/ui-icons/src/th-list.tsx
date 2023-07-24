import { faThList } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ThList icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ThList = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faThList} {...props} />;
};

export default ThList;
