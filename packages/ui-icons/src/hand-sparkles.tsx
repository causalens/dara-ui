import { faHandSparkles } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandSparkles icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandSparkles = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandSparkles} {...props} />;
};

export default HandSparkles;
