import { faPenFancy } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PenFancy icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PenFancy = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPenFancy} {...props} />;
};

export default PenFancy;
