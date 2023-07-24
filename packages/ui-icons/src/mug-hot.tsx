import { faMugHot } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MugHot icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MugHot = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMugHot} {...props} />;
};

export default MugHot;
