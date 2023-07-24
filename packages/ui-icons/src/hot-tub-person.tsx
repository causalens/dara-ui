import { faHotTubPerson } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HotTubPerson icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HotTubPerson = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHotTubPerson} {...props} />;
};

export default HotTubPerson;
