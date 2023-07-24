import { faHandPaper } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandPaper icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandPaper = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandPaper} {...props} />;
};

export default HandPaper;
