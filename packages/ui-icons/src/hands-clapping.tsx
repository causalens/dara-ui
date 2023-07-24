import { faHandsClapping } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandsClapping icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandsClapping = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandsClapping} {...props} />;
};

export default HandsClapping;
